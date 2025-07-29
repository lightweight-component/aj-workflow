package com.ajaxjs.workflow.service.parser;

import com.ajaxjs.workflow.model.node.ForkModel;
import com.ajaxjs.workflow.model.node.NodeModel;
import org.springframework.stereotype.Component;

/**
 * 分支节点解析类
 */
@Component
public class ForkParser extends AbstractNodeParser {
    @Override
    protected NodeModel newModel() {
        return new ForkModel();
    }
}
