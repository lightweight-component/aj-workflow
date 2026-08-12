package com.ajaxjs.workflow.service.scheduling;

import com.ajaxjs.workflow.model.po.Task;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.Map;

/**
 * Job 实体，用于传递给具体的调度框架
 */

@Data
public class JobEntity implements Serializable {
    private static final long serialVersionUID = 5807718947643229134L;

    /**
     * 参与类型
     */
    public enum JobType {
        EXECUTOR, REMINDER
    }

    /**
     * job主键
     */
    private String key;

    /**
     * job组
     */
    private String group;

    /**
     * 任务对应的业务 id 串
     */
    private String id;

    /**
     * 节点模型名称
     */
    private String modelName;

    /**
     * job 类型
     */
    private int jobType;

    /**
     * 任务对象
     */
    private Task task;

    /**
     * 启动时间
     */
    private Date startTime;

    /**
     * 间隔时间(分钟)
     */
    private int period;

    /**
     * 执行参数
     */
    private Map<String, Object> args;

    /**
     * @param id 调度标识
     * @param task 工作流任务
     * @param startTime 首次执行时间
     */
    public JobEntity(String id, Task task, Date startTime) {
        this(id, task, startTime, 0);
    }

    /**
     * @param id 调度标识
     * @param task 工作流任务
     * @param startTime 首次执行时间
     * @param period 周期分钟数
     */
    public JobEntity(String id, Task task, Date startTime, int period) {
        this.id = id;
        this.task = task;
        this.startTime = startTime;
        this.period = period;
    }

    /**
     * @param id 调度标识
     * @param task 工作流任务
     * @param startTime 首次执行时间
     * @param args 执行参数
     */
    public JobEntity(String id, Task task, Date startTime, Map<String, Object> args) {
        this(id, task, startTime, args, 0);
    }

    /**
     * 创建完整的调度任务描述。
     * @param id 调度标识
     * @param task 工作流任务
     * @param startTime 首次执行时间
     * @param args 执行参数
     * @param period 周期分钟数，零表示不重复
     */
    public JobEntity(String id, Task task, Date startTime, Map<String, Object> args, int period) {
        this.id = id;
        this.task = task;
        this.startTime = startTime;
        this.period = period;
        this.args = args;
    }
}
