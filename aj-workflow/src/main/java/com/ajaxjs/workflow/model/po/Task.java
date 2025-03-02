package com.ajaxjs.workflow.model.po;

import com.ajaxjs.data.jdbc_helper.common.TableName;
import com.ajaxjs.framework.IgnoreDB;
import com.ajaxjs.util.convert.EntityConvert;
import com.ajaxjs.workflow.common.WfConstant.PerformType;
import com.ajaxjs.workflow.common.WfConstant.TaskType;
import com.ajaxjs.workflow.common.WfUtils;
import com.ajaxjs.workflow.model.node.work.TaskModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.Map;

/**
 * 任务实体类
 */
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("wf_task")
public class Task extends BasePersistantObject {
    /**
     *
     */
    public static final String KEY_ACTOR = "S-ACTOR";

    /**
     * 版本
     */
    private Integer version;

    /**
     * 流程实例ID
     */
    private Long orderId;

    /**
     * 任务显示名称
     */
    private String displayName;

    /**
     * 参与方式（0：普通任务；1：参与者会签任务）
     */
    private PerformType performType;

    /**
     * 任务类型（0：主办任务；1：协办任务）
     */
    private TaskType taskType;

    /**
     * 任务处理者 id
     */
    private Long operator;

    /**
     * 任务完成时间
     */
    private Date finishDate;

    /**
     * 期望的完成时间 date 类型
     */
    private Date expireDate;

    /**
     * 提醒时间 date 类型
     */
    private Date remindDate;

    /**
     * 任务关联的表单 url
     */
    private String actionUrl;
    /**
     * 任务参与者列表
     */
    private Long[] actorIds;

    /**
     * 父任务Id
     */
    private Long parentId;

    /**
     * 任务附属变量
     */
    private String variable;

    /**
     * 保持模型对象
     */
    private TaskModel model;

    /**
     * TODO
     */
    @IgnoreDB
    public Long[] getActorIds() {
        if (actorIds == null) {
            Map<String, Object> map = EntityConvert.json2map(variable);

            if (map != null && map.get(KEY_ACTOR) != null) {
                String actorStr = (String) map.get(KEY_ACTOR);
                actorIds = WfUtils.cast(actorStr.split(","));
            }
        }

        return actorIds;
    }

    @IgnoreDB
    public TaskModel getModel() {
        return model;
    }

    @Override
    public Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    public String toString() {
        return "Task(id=" + getId() +
                ",orderId=" + orderId +
                ",taskName=" + getName() +
                ",displayName" + displayName +
                ",taskType=" + taskType +
                ",createDate=" + getCreateDate() +
                ",performType=" + performType + ")";
    }
}
