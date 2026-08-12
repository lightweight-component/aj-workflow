package com.ajaxjs.workflow;

import com.ajaxjs.workflow.common.WfConstant.PerformType;
import com.ajaxjs.workflow.common.WfException;
import com.ajaxjs.workflow.model.Args;
import com.ajaxjs.workflow.model.ProcessModel;
import com.ajaxjs.workflow.model.node.StartModel;
import com.ajaxjs.workflow.model.node.work.TaskModel;
import com.ajaxjs.workflow.model.po.Order;
import com.ajaxjs.workflow.model.po.OrderHistory;
import com.ajaxjs.workflow.model.po.Task;
import com.ajaxjs.workflow.model.po.TaskHistory;
import com.ajaxjs.workflow.service.scheduling.JobEntity;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

/** 工作流模型、历史对象和基础工具的离线单元测试。 */
public class WorkflowModelUnitTest {
    @Test
    public void argsReturnsExistingOrCreatesEmptyInstance() {
        Args args = new Args();
        args.put("key", "value");
        assertSame(args, Args.getEmpty(args));
        assertTrue(Args.getEmpty(null).isEmpty());
    }

    @Test
    public void taskModelNormalizesDefaultsAndRecognizesModes() {
        TaskModel model = new TaskModel();
        model.setPerformType("  ");
        model.setTaskType(null);
        assertTrue(model.isPerformAny());
        assertTrue(model.isMajor());
        model.setPerformType("all");
        assertTrue(model.isPerformAll());
    }

    @Test
    public void taskCloneKeepsValuesButCanUseIndependentIdentity() throws Exception {
        Task original = new Task();
        original.setId(10L);
        original.setName("approve");
        original.setPerformType(PerformType.ALL);
        Task clone = (Task) original.clone();
        clone.setId(null);
        assertEquals("approve", clone.getName());
        assertEquals(PerformType.ALL, clone.getPerformType());
        assertEquals(10L, original.getId());
        assertNull(clone.getId());
    }

    @Test
    public void historyObjectsCopyAndRestoreWorkflowState() {
        Order order = new Order();
        order.setId(7L);
        order.setProcessId(3L);
        order.setVariable("{\"x\":1}");
        Order restored = new OrderHistory(order).undo();
        assertEquals(7L, restored.getId());
        assertEquals(3L, restored.getProcessId());

        Task task = new Task();
        task.setId(11L);
        task.setOrderId(7L);
        task.setName("approve");
        task.setPerformType(PerformType.ALL);
        Task restoredTask = new TaskHistory(task).undoTask();
        assertNull(restoredTask.getId());
        assertEquals("approve", restoredTask.getName());
        assertEquals(PerformType.ALL, restoredTask.getPerformType());
    }

    @Test
    public void processModelFindsStartAndNamedNodes() {
        ProcessModel process = new ProcessModel();
        StartModel start = new StartModel();
        start.setName("start");
        TaskModel task = new TaskModel();
        task.setName("approve");
        process.getNodes().add(start);
        process.getNodes().add(task);
        assertSame(start, process.getStart());
        assertSame(task, process.getNode("approve"));
        assertNull(process.getNode("missing"));
    }

    @Test
    public void jobEntityConstructorsRetainSchedulingArguments() {
        Task task = new Task();
        Date start = new Date(1234L);
        JobEntity job = new JobEntity("job-1", task, start, 5);
        assertEquals("job-1", job.getId());
        assertSame(task, job.getTask());
        assertEquals(start, job.getStartTime());
        assertEquals(5, job.getPeriod());
    }

    @Test
    public void workflowExceptionPreservesMessageAndCause() {
        IllegalStateException cause = new IllegalStateException("root");
        WfException error = new WfException("workflow", cause);
        assertEquals("workflow", error.getMessage());
        assertSame(cause, error.getCause());
    }
}
