package com.ajaxjs.workflow.model.node.work;

import com.ajaxjs.workflow.model.node.NodeModel;

/** 表示带业务表单配置的工作节点基类。 */
public abstract class WorkModel extends NodeModel {
    private static final long serialVersionUID = 761102386160546149L;

    /** 任务处理页面或表单地址。 */
    private String form;

    /** @return 任务处理页面或表单地址 */
    public String getForm() {
        return form;
    }

    /** @param form 任务处理页面或表单地址 */
    public void setForm(String form) {
        this.form = form;
    }
}
