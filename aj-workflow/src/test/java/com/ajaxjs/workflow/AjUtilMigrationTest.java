package com.ajaxjs.workflow;

import com.ajaxjs.util.reflect.NewInstance;
import com.ajaxjs.workflow.service.handler.DecisionHandler;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertNull;

/** Offline regression tests for the ajaxjs-util 1.3.6 migration. */
public class AjUtilMigrationTest {
    @Test
    public void newInstanceCreatesConfiguredWorkflowExtension() {
        DecisionHandler handler = new NewInstance<>(SampleDecisionHandler.class).newInstance();
        assertTrue(handler instanceof SampleDecisionHandler);
    }

    @Test
    public void springContextFailsClearlyBeforeContainerInitialization() {
        IllegalStateException error = assertThrows(IllegalStateException.class,
                () -> com.ajaxjs.workflow.common.SpringContext.getBean(SampleDecisionHandler.class));
        assertEquals("The Spring application context has not been initialized.", error.getMessage());
    }

    @Test
    public void taskVariableMergePreservesExistingValuesAndOverridesSubmittedKeys() {
        java.util.Map<String, Object> submitted = new java.util.HashMap<>();
        submitted.put("shared", "new");
        submitted.put("added", 2);
        java.util.Map<String, Object> merged = com.ajaxjs.workflow.service.TaskService
                .mergeVariables("{\"kept\":1,\"shared\":\"old\"}", submitted);
        assertEquals(1, ((Number) merged.get("kept")).intValue());
        assertEquals("new", merged.get("shared"));
        assertEquals(2, merged.get("added"));
    }

    @Test
    public void taskVariableMergeReturnsMutableMapForEmptyInputs() {
        java.util.Map<String, Object> merged = com.ajaxjs.workflow.service.TaskService.mergeVariables(null, null);
        merged.put("key", "value");
        assertEquals("value", merged.get("key"));
    }

    @Test
    public void emptyActorListHasSafeStringRepresentation() {
        assertEquals("", com.ajaxjs.workflow.common.WfUtils.join(null));
        assertEquals("", com.ajaxjs.workflow.common.WfUtils.join(new Long[0]));
        assertNull(new com.ajaxjs.workflow.model.po.Task().getId());
    }

    public static final class SampleDecisionHandler implements DecisionHandler {
        @Override
        public String decide(com.ajaxjs.workflow.model.Execution execution) {
            return "next";
        }
    }
}
