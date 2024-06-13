package com.ajaxjs.workflow.service.handler;

import com.ajaxjs.workflow.model.Execution;

/**
 * 流程各模型操作处理接口
 */
public interface IHandler {
    /**
     * 子类需要实现的方法，来处理具体的操作
     *
     * @param exec 执行对象
     */
    void handle(Execution exec);
}
