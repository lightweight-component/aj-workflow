package com.ajaxjs.workflow.service.parser;

import com.ajaxjs.workflow.model.node.JoinModel;
import com.ajaxjs.workflow.model.node.NodeModel;
import org.springframework.stereotype.Component;

/**
 * 合并节点解析类
 */
@Component
public class JoinParser extends AbstractNodeParser {
    @Override
    protected NodeModel newModel() {
        return new JoinModel();
    }
}
