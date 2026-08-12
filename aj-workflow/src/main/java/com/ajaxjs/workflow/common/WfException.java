package com.ajaxjs.workflow.common;

/**
 * 框架抛出的所有异常都是此类（unchecked exception）
 */
public class WfException extends RuntimeException {
    /** 序列化版本号。 */
    private static final long serialVersionUID = -5220859421440167454L;

    /** 创建无详细信息的工作流异常。 */
    public WfException() {
        super();
    }

    /**
     * 创建带消息和原因的工作流异常。
     * @param msg 异常消息
     * @param cause 原始异常
     */
    public WfException(String msg, Throwable cause) {
        super(msg, cause);
    }

    /** @param msg 异常消息 */
    public WfException(String msg) {
        super(msg);
    }

    /** @param cause 原始异常 */
    public WfException(Throwable cause) {
        super(cause);
    }
}
