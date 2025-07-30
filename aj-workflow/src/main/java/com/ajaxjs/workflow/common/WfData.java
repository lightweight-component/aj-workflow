package com.ajaxjs.workflow.common;

import com.ajaxjs.sqlman.Sql;
import com.ajaxjs.sqlman.crud.Entity;
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
        return Sql.instance().input("SELECT * FROM wf_process").queryList(ProcessPO.class);
    }

    static ProcessPO findProcess(Long id) {
        return Sql.instance().input("SELECT * FROM wf_process WHERE id = ?", id).query(ProcessPO.class);
    }

    static List<ProcessPO> findProcess(String name, Integer version) {
        String sql = "SELECT * FROM wf_process WHERE name = ?";

        if (version != null)
            sql += " AND version = " + version;

        return Sql.instance().input(sql, name).queryList(ProcessPO.class);
    }

    static Integer getLatestProcessVersion(String name) {
        return Sql.instance().input("SELECT max(version) FROM wf_process WHERE name = ?", name).queryOne(Integer.class);
    }

    /**
     * 根据 id 获取任务
     *
     * @param id 任务 id
     * @return 任务
     */
    static Task findTask(Long id) {
        Task task = Sql.instance().input("SELECT * FROM wf_task WHERE id = ?", id).query(Task.class);
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

        return Sql.instance().input(sql, id).queryList(Task.class);
    }

    static List<Task> findNextActiveTasks(Long id, String taskName, Long parentTaskId) {
        String sql = "SELECT * FROM wf_task WHERE parent_task_id IN "
                + "( SELECT ht.id FROM wf_task_history ht WHERE ht.order_id = ? AND ht.name = ? AND ht.parent_task_id = ? )";

        return Sql.instance().input(sql, id, taskName, parentTaskId).queryList(Task.class);
    }

    static List<TaskActor> findTaskActorsByTaskId(Long taskId) {
        return Sql.instance().input("SELECT * FROM wf_task_actor WHERE task_id = ?", taskId).queryList(TaskActor.class);
    }

    static void createTaskActor(Long taskId, Long actorId) {
        String sql = "INSERT INTO wf_task_actor (task_id, actor_id) VALUES (?, ?)";
        Sql.instance().input(sql, taskId, actorId).create(true, Long.class);
    }

    /**
     * 根据流程 id 查找所有的任务
     *
     * @param orderId 流程 id
     * @return 所有的任务
     */
    static List<Task> findTasksByOrderId(Long orderId) {
        return Sql.instance().input("SELECT * FROM wf_task WHERE order_id = ?", orderId).queryList(Task.class);
    }

    static List<Task> findTasksByParentTaskId(Long parentTaskId) {
        return Sql.instance().input("SELECT * FROM wf_task WHERE parent_task_id = ?", parentTaskId).queryList(Task.class);
    }

    static TaskHistory findTaskHistory(Long id) {
        return Sql.instance().input("SELECT * FROM wf_task_history WHERE id = ?", id).query(TaskHistory.class);
    }

    /**
     * 根据流程 id 查找所有的历史任务
     *
     * @param orderId 流程 id
     * @return 所有的历史任务
     */
    static List<TaskHistory> findHistoryTasksByOrderId(Long orderId) {
        return Sql.instance().input("SELECT * FROM wf_task_history WHERE order_id = ?", orderId).queryList(TaskHistory.class);
    }

    /**
     * 根据流程 id 和任务名称查找所有的历史任务
     *
     * @param orderId  流程 id
     * @param taskName 任务名称
     * @return 所有的历史任务
     */
    static List<TaskHistory> findHistoryTasksByOrderIdAndTaskName(Long orderId, String taskName) {
        return Sql.instance().input("SELECT * FROM wf_task_history WHERE order_id = ? AND name = ?", orderId, taskName).queryList(TaskHistory.class);
    }

    static void createTaskHistory(TaskHistory history) {
        Entity.instance().input(history).create();
    }

    static Order findOrder(Long id) {
        return Sql.instance().input("SELECT * FROM wf_order WHERE id = ?", id).query(Order.class);
    }

    static List<Order> findByIdAndExcludedIds(Long parentId, Long... childOrderId) {
        String sql = "SELECT * FROM wf_order WHERE parent_id = ? AND id NOT IN (" + StrUtil.join(childOrderId, ",") + ")";

        return Sql.instance().input(sql, parentId).queryList(Order.class);
    }

    static OrderHistory findOrderHistory(Long id) {
        return Sql.instance().input("SELECT * FROM wf_order_history WHERE id = ?", id).query(OrderHistory.class);
    }

//	interface OrderHistoryDao extends IDataService<OrderHistory> {
//		@Select("SELECT * FROM ${tableName} WHERE orderId = ?")
//		public OrderHistory findByOrderId(Long orderId);
//	}
//
//	public static final OrderHistoryDao OrderHistoryDAO = new Caller("cms", "wf_order_history").bind(OrderHistoryDao.class, OrderHistory.class);
}
