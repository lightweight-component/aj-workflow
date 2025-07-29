package com.ajaxjs.workflow.model.po;

import lombok.Data;

import java.util.Date;

/**
 * 持久对象
 * PO 就是数据库中的记录，一个 PO 的数据结构对应着库中表的结构，表中的一条记录就是一个 PO 对象
 */
@Data
public abstract class BasePersistantObject  {
    private Long id;

    /**
     * 数据字典：状态
     */
    private Integer stat;

    private String name;

    private String content;

    /**
     * 创建者 id
     */
    private Long creator;

    /**
     * 上一次更新人员 id
     */
    private Long updater;

    /**
     * 创建日期
     */
    private Date createDate;

    /**
     * 修改日期
     */
    private Date updateDate;
}
