package com.ajaxjs.workflow.model.node.work;

import com.ajaxjs.util.reflect.NewInstance;
import com.ajaxjs.workflow.model.Execution;
import com.ajaxjs.workflow.model.FieldModel;
import com.ajaxjs.workflow.model.TransitionModel;
import com.ajaxjs.workflow.service.handler.AbstractMergeHandler;
import com.ajaxjs.workflow.service.scheduling.JobCallback;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.function.BiFunction;

/**
 * 任务定义 task 元素
 */

@Slf4j
@Data
@EqualsAndHashCode(callSuper = true)
public class TaskModel extends WorkModel {
    private static final long serialVersionUID = 1775545243233990922L;

    /**
     * 类型：普通任务
     */
    public static final String PERFORM_TYPE_ANY = "ANY";

    /**
     * 类型：参与者 fork 任务
     */
    public static final String PERFORM_TYPE_ALL = "ALL";

    /**
     * 类型：主办任务
     */
    public static final String TASK_TYPE_MAJOR = "Major";

    /**
     * 类型：协办任务
     */
    public static final String TASK_TYPE_AIDANT = "Aidant";

    /**
     * 参与者变量名称
     */
    private String assignee;

    /**
     * 参与方式 any：任何一个参与者处理完即执行下一步 all：所有参与者都完成，才可执行下一步
     */
    private String performType = PERFORM_TYPE_ANY;

    /**
     * 任务类型 major：主办任务 aidant：协办任务
     */
    private String taskType = TASK_TYPE_MAJOR;

    /**
     * 期望完成时间
     */
    private Date expireTime;

    /**
     * 提醒时间
     */
    private Date reminderTime;

    /**
     * 提醒间隔(分钟)
     */
    private String reminderRepeat;

    /**
     * 是否自动执行
     */
    private String autoExecute;

    /**
     * 任务执行后回调类
     */
    private String callback;

    /**
     * 分配参与者处理类型
     */
    private String assignmentHandler;

    /**
     * 任务执行后回调对象
     */
    private JobCallback callbackObject;

    /**
     * 字段模型集合
     */
    private List<FieldModel> fields = null;

    @Override
    protected void exec(Execution exec) {
        log.info("任务模型的执行");

        if (performType == null || performType.equalsIgnoreCase(PERFORM_TYPE_ANY))
            runOutTransition(exec);// any 方式，直接执行输出变迁
        else {
            String taskName = getName(); // all 的任务名称

            // all 方式，需要判断是否已全部合并 由于 all 方式分配任务，是每人一个任务
            // 那么此时需要判断之前分配的所有任务都执行完成后，才可执行下一步，否则不处理
            // actor all 方式的合并处理器。查询参数为：orderId、taskName
            fire(new AbstractMergeHandler() {
                @Override
                protected String[] findActiveNodes() {
                    return new String[]{taskName};
                }
            }, exec);

            if (exec.isMerged())
                runOutTransition(exec);
        }
    }

    public boolean isPerformAny() {
        return PERFORM_TYPE_ANY.equalsIgnoreCase(performType);
    }

    public boolean isPerformAll() {
        return PERFORM_TYPE_ALL.equalsIgnoreCase(performType);
    }

    public boolean isMajor() {
        return TASK_TYPE_MAJOR.equalsIgnoreCase(taskType);
    }

    public void setTaskType(String taskType) {
        this.taskType = !StringUtils.hasText(taskType) ? TASK_TYPE_MAJOR : taskType;
    }

    public void setPerformType(String performType) {
        this.performType = !StringUtils.hasText(performType) ? PERFORM_TYPE_ANY : performType;
    }

    /**
     * 如何分配参与者
     */
    private BiFunction<TaskModel, Execution, Object> assignment;

    public void setCallback(String callbackStr) {
        if (StringUtils.hasText(callbackStr)) {
            this.callback = callbackStr;
            callbackObject = (JobCallback) NewInstance.newInstance(callbackStr);
            Objects.requireNonNull(callbackObject, "回调处理类实例化失败");
        }
    }

    /**
     * 获取后续任务模型集合（方便预处理）
     *
     * @return 模型集合
     * @deprecated
     */
    public List<TaskModel> getNextTaskModels() {
        List<TaskModel> models = new ArrayList<>();

        for (TransitionModel tm : this.getOutputs())
            addNextModels(models, tm, TaskModel.class);

        return models;
    }
}
