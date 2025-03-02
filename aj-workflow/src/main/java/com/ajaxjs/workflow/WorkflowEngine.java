package com.ajaxjs.workflow;

import com.ajaxjs.util.convert.EntityConvert;
import com.ajaxjs.workflow.common.WfConstant;
import com.ajaxjs.workflow.common.WfConstant.TaskType;
import com.ajaxjs.workflow.common.WfData;
import com.ajaxjs.workflow.model.Args;
import com.ajaxjs.workflow.model.Execution;
import com.ajaxjs.workflow.model.ProcessModel;
import com.ajaxjs.workflow.model.TransitionModel;
import com.ajaxjs.workflow.model.node.NodeModel;
import com.ajaxjs.workflow.model.node.StartModel;
import com.ajaxjs.workflow.model.node.work.TaskModel;
import com.ajaxjs.workflow.model.po.Order;
import com.ajaxjs.workflow.model.po.ProcessPO;
import com.ajaxjs.workflow.model.po.Task;
import com.ajaxjs.workflow.service.OrderService;
import com.ajaxjs.workflow.service.ProcessService;
import com.ajaxjs.workflow.service.SurrogateService;
import com.ajaxjs.workflow.service.TaskService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.util.*;

/**
 * 基本的流程引擎实现类
 */
@Slf4j
@Component
public class WorkflowEngine {
    /**
     * 启动
     *
     * @param name     流程名称
     * @param version  版本号
     * @param operator 操作人 id
     * @param args     参数列表
     * @return 流程实例
     */
    public Order startAndExecute(String name, Integer version, Long operator, Args args) {
        Order order = startInstanceByName(name, version, operator, args);
        execTask(order, operator, args);

        return order;
    }

    /**
     * 启动
     *
     * @param processId 流程定义 id
     * @param operator  操作人 id
     * @param args      参数列表
     * @return 流程实例
     */
    public Order startAndExecute(Long processId, Long operator, Args args) {
        Order order = startInstanceById(processId, operator, args);
        execTask(order, operator, args);

        return order;
    }

    /**
     * 为什么要用数组保存起来，却不使用？
     */
    private void execTask(Order order, Long operator, Args args) {
        List<Task> tasks = WfData.findTasksByOrderId(order.getId());
        List<Task> newTasks = new ArrayList<>();

        if (!CollectionUtils.isEmpty(tasks)) {
            Task task = tasks.get(0);
            newTasks.addAll(executeTask(task.getId(), operator, args));
        }
    }

    /**
     * 根据流程定义 id，操作人 id，参数列表启动流程实例
     *
     * @param processId 流程定义 id
     * @param operator  操作人 id
     * @param args      参数列表
     * @return 流程实例
     */
    public Order startInstanceById(Long processId, Long operator, Args args) {
        args = Args.getEmpty(args);

        return startInstance(processService.findById(processId), operator, args);
    }

    /**
     * 根据流程名称、版本号、操作人、参数列表启动流程实例
     *
     * @param name     流程名称
     * @param ver      版本号
     * @param operator 操作人 id
     * @param args     参数列表
     * @return 流程实例
     */
    public Order startInstanceByName(String name, Integer ver, Long operator, Args args) {
        args = Args.getEmpty(args);

        return startInstance(processService.findByVersion(name, ver), operator, args);
    }

    /**
     * 根据父执行对象启动子流程实例（用于启动子流程）
     *
     * @param exec 父执行对象
     * @return 流程实例
     */
    public Order startInstanceByExecution(Execution exec) {
        ProcessPO process = exec.getProcess();
        Execution current = createExecute(process, exec.getOperator(), exec.getArgs(), exec.getParentOrder().getId(), exec.getParentNodeName());
        runStart(process, current);

        return current.getOrder();
    }

    /**
     * 启动流程实例
     *
     * @param process  流程对象
     * @param operator 操作人 id
     * @param args     参数列表
     * @return 流程实例
     */
    private Order startInstance(ProcessPO process, Long operator, Args args) {
        // 检查流程状态
        String idOrName = process.getName();
        Objects.requireNonNull(process, "指定的流程定义[id/name=" + idOrName + "]不存在");

        if (process.getStat() != null && process.getStat().equals(WfConstant.STATE_FINISH))
            throw new IllegalArgumentException("指定的流程定义[id/name=" + idOrName + ",version=" + process.getVersion() + "]为非活动状态");

        Execution exec = createExecute(process, operator, args, null, null);

        if (process.getModel() != null)
            runStart(process, exec);

        return exec.getOrder();
    }

    /**
     * 运行 start 节点
     */
    private static void runStart(ProcessPO process, Execution exec) {
        StartModel start = process.getModel().getStart();
        Objects.requireNonNull(start, "流程定义[id=" + process.getId() + "]没有开始节点");

        log.info("运行 start 节点");
        start.execute(exec);
    }

    /**
     * 创建流程实例，并返回执行对象
     *
     * @param process        流程定义
     * @param operator       操作人
     * @param args           参数列表
     * @param parentId       父流程实例 id
     * @param parentNodeName 启动子流程的父流程节点名称
     * @return Execution 执行对象
     */
    private Execution createExecute(ProcessPO process, Long operator, Args args, Long parentId, String parentNodeName) {
        Order order = orderService.create(process, operator, args, parentId, parentNodeName);

        Execution current = new Execution(this, process, order, args);
        current.setOperator(operator);
        log.info("创建 Execution 对象完毕");

        return current;
    }

    /**
     * 根据任务主键 id，操作人 id，参数列表执行任务
     *
     * @param taskId   任务 id
     * @param operator 操作人
     * @param args     参数列表
     * @return 任务列表
     */
    public List<Task> executeTask(Long taskId, Long operator, Args args) {
        log.info("开始执行对象，先初始化相关的参数");

        Execution exec = executeTaskCore(taskId, operator, args); // 完成任务，并且构造执行对象

        if (exec == null)
            return Collections.emptyList();

//		ProcessModel model = execution.getProcess().getModel();
//
//		if (model != null) {
//			NodeModel nodeModel = model.getNode(execution.getTask().getName());
//			nodeModel.execute(execution);// 将执行对象交给该任务对应的节点模型执行
//		}

        // 将执行对象交给该任务对应的节点模型执行
        String taskName = exec.getTask().getName();
        log.info("正在执行任务 {}", taskName);
        exec.getProcess().getModel().getNode(taskName).execute(exec);

        return exec.getTasks();
    }

    /**
     * 根据任务主键 id，操作人 id，参数列表执行任务，并且根据 nodeName 跳转到任意节点 1、nodeName 为 null 时，则驳回至上一步处理
     * 2、nodeName 不为 null 时，则任意跳转，即动态创建转移
     *
     * @param taskId   任务 id
     * @param operator 操作人
     * @param args     参数列表
     * @param nodeName 节点名称
     * @return 任务列表
     */
    public List<Task> executeAndJumpTask(Long taskId, Long operator, Args args, String nodeName) {
        Execution execution = executeTaskCore(taskId, operator, args);

        if (execution == null)
            return Collections.emptyList();

        ProcessModel model = execution.getProcess().getModel();
        Objects.requireNonNull(model, "当前任务未找到流程定义模型");

        if (!StringUtils.hasText(nodeName)) {
            Task newTask = taskService.rejectTask(model, execution.getTask());
            execution.addTask(newTask);
        } else {
            NodeModel nodeModel = model.getNode(nodeName);
            Objects.requireNonNull(nodeModel, "根据节点名称[" + nodeName + "]无法找到节点模型");

            // 动态创建转移对象，由转移对象执行 execution 实例
            TransitionModel tm = new TransitionModel();
            tm.setTarget(nodeModel);
            tm.setEnabled(true);
            tm.execute(execution);
        }

        return execution.getTasks();
    }

    /**
     * 根据任务主键 id，操作人 id，参数列表完成任务，并且构造执行对象
     *
     * @param taskId   任务 id
     * @param operator 操作人
     * @param args     参数列表
     * @return Execution
     */
    private Execution executeTaskCore(Long taskId, Long operator, Args args) {
        args = Args.getEmpty(args);

        Task task = taskService.complete(taskId, operator, args);
        Order order = WfData.findOrder(task.getOrderId());
        Objects.requireNonNull(order, "指定的流程实例[id=" + task.getOrderId() + "]已完成或不存在");

        // 记录最后更新人
        Order _update = new Order();
        _update.setId(order.getId());
        _update.setUpdater(operator);
        orderService.update(_update);
        log.info("更新流程实例 {} 完成", _update.getId());

        // 协办任务完成不产生执行对象
        if (task.getTaskType() != TaskType.MAJOR)
            return null;

        Map<String, Object> orderMaps = EntityConvert.json2map(order.getVariable());
        if (orderMaps == null)
            orderMaps = Collections.emptyMap();

        for (Map.Entry<String, Object> entry : orderMaps.entrySet()) {
            if (args.containsKey(entry.getKey()))
                continue;

            args.put(entry.getKey(), entry.getValue());
        }

        // 创建执行对象
        ProcessPO process = processService.findById(order.getProcessId());
        Execution exec = new Execution(this, process, order, args);
        exec.setOperator(operator);
        exec.setTask(task);
        log.info("驱动任务 {} 继续执行", task.getId());

        return exec;
    }

    /**
     * 根据流程实例 id，操作人 id，参数列表按照节点模型 model 创建新的自由任务
     *
     * @param orderId  流程 id
     * @param operator 操作人
     * @param args     参数列表
     * @param model    任务模型
     * @return 任务列表
     */
    public List<Task> createFreeTask(Long orderId, Long operator, Args args, TaskModel model) {
        Order order = WfData.findOrder(orderId);
        Objects.requireNonNull(order, "指定的流程实例[id=" + orderId + "]已完成或不存在");
        order.setUpdater(operator);
        // order.setLastUpdateTime(DateHelper.getTime());

        ProcessPO process = processService.findById(order.getProcessId());
        Execution exec = new Execution(this, process, order, args);
        exec.setOperator(operator);

        return TaskService.createTaskByModel(model, exec);
    }

    @Autowired
    public ProcessService processService;

    @Autowired
    public OrderService orderService;

    @Autowired
    public TaskService taskService;

    @Autowired
    public SurrogateService surrogateService;
}
