package com.ajaxjs.workflow;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/** 启用工作流 Web 模块所需 Spring MVC 能力的配置入口。 */
@Configuration
@EnableWebMvc
public class WfWebInit {
    /**
     * 保留的独立启动入口；当前组件自身不创建 Spring 容器。
     *
     * @param args 命令行参数
     */
    public static void main(String[] args) {
    }
}
