package com.ajaxjs.workflow.common;

import com.ajaxjs.sqlman.Action;
import com.ajaxjs.util.StrUtil;
import com.ajaxjs.workflow.model.po.*;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Objects;

/**
 * DAO
 */
public interface WfData {
    static List<ProcessPO> findProcess() {
        return new Action("SELECT * FROM wf_process").query().list(ProcessPO.class);
    }

    static ProcessPO findProcess(Long id) {
        return new Action("SELECT * FROM wf_process WHERE id = ?").query(id).one(ProcessPO.class);
    }

    static List<ProcessPO> findProcess(String name, Integer version) {
        String sql = "SELECT * FROM wf_process WHERE name = ?";

        if (version != null)
            sql += " AND version = " + version;

        return new Action(sql, name).query().list(ProcessPO.class);
    }

    static Integer getLatestProcessVersion(String name) {
        return new Action("SELECT max(version) FROM wf_process WHERE name = ?").query(name).one(Integer.class);
    }

    /**
     * 根据 id 获取任务
     *
     * @param id 任务 id
     * @return 任务
     */
    static Task findTask(Long id) {
        Task task = new Action("SELECT * FROM wf_task WHERE id = ?").query(id).one(Task.class);
        Objects.requireNonNull(task, "指定的任务[id=" + id + "]不存在");

        return task;
    }

    static List<Task> findByOrderIdAndExcludedIds(Long id, Long childOrderId, String[] activeNodes) {
        String sql = "SELECT * FROM wf_task WHERE order_id = ?";

        if (childOrderId != null && childOrderId != 0)
            sql += "id NOT IN ( " + childOrderId + " )";

        if (!ObjectUtils.isEmpty(activeNodes)) {
            int i = 0;
            for (String str : activeNodes)
                activeNodes[i++] = "'" + str + "'";

            sql += "AND name IN (" + String.join(",", activeNodes) + ")";
        }

        return new Action(sql).query(id).list(Task.class);
    }

    static List<Task> findNextActiveTasks(Long id, String taskName, Long parentTaskId) {
        String sql = "SELECT * FROM wf_task WHERE parent_task_id IN "
                + "( SELECT ht.id FROM wf_task_history ht WHERE ht.order_id = ? AND ht.name = ? AND ht.parent_task_id = ? )";

        return new Action(sql).query(id, taskName, parentTaskId).list(Task.class);
    }

    static List<TaskActor> findTaskActorsByTaskId(Long taskId) {
        return new Action("SELECT * FROM wf_task_actor WHERE task_id = ?").query(taskId).list(TaskActor.class);
    }

    static void createTaskActor(Long taskId, Long actorId) {
        String sql = "INSERT INTO wf_task_actor (task_id, actor_id) VALUES (?, ?)";
        new Action(sql).create(taskId, actorId).execute(true, Long.class);
    }

    /**
     * 根据流程 id 查找所有的任务
     *
     * @param orderId 流程 id
     * @return 所有的任务
     */
    static List<Task> findTasksByOrderId(Long orderId) {
        return new Action("SELECT * FROM wf_task WHERE order_id = ?").query(orderId).list(Task.class);
    }

    static List<Task> findTasksByParentTaskId(Long parentTaskId) {
        return new Action("SELECT * FROM wf_task WHERE parent_task_id = ?").query(parentTaskId).list(Task.class);
    }

    static TaskHistory findTaskHistory(Long id) {
        return new Action("SELECT * FROM wf_task_history WHERE id = ?").query(id).one(TaskHistory.class);
    }

    /**
     * 根据流程 id 查找所有的历史任务
     *
     * @param orderId 流程 id
     * @return 所有的历史任务
     */
    static List<TaskHistory> findHistoryTasksByOrderId(Long orderId) {
        return new Action("SELECT * FROM wf_task_history WHERE order_id = ?").query(orderId).list(TaskHistory.class);
    }

    /**
     * 根据流程 id 和任务名称查找所有的历史任务
     *
     * @param orderId  流程 id
     * @param taskName 任务名称
     * @return 所有的历史任务
     */
    static List<TaskHistory> findHistoryTasksByOrderIdAndTaskName(Long orderId, String taskName) {
        return new Action("SELECT * FROM wf_task_history WHERE order_id = ? AND name = ?").query(orderId, taskName).list(TaskHistory.class);
    }

    static void createTaskHistory(TaskHistory history) {
        new Action(history).create().execute(true);
    }

    static Order findOrder(Long id) {
        return new Action("SELECT * FROM wf_order WHERE id = ?").query(id).one(Order.class);
    }

    static List<Order> findByIdAndExcludedIds(Long parentId, Long... childOrderId) {
        String sql = "SELECT * FROM wf_order WHERE parent_id = ? AND id NOT IN (" + StrUtil.join(childOrderId, ",") + ")";

        return new Action(sql).query(parentId).list(Order.class);
    }

    static OrderHistory findOrderHistory(Long id) {
        return new Action("SELECT * FROM wf_order_history WHERE id = ?").query(id).one(OrderHistory.class);
    }

//	interface OrderHistoryDao extends IDataService<OrderHistory> {
//		@Select("SELECT * FROM ${tableName} WHERE orderId = ?")
//		public OrderHistory findByOrderId(Long orderId);
//	}
//
//	public static final OrderHistoryDao OrderHistoryDAO = new Caller("cms", "wf_order_history").bind(OrderHistoryDao.class, OrderHistory.class);
}
