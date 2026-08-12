package com.ajaxjs.workflow.common;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * 为遗留静态工作流入口提供最小能力的 Spring 容器访问桥接器。
 */
@Component
public final class SpringContext implements ApplicationContextAware {
    /**
     * 当前 Spring 应用上下文；volatile 保证初始化结果对其他线程可见。
     */
    private static volatile ApplicationContext context;

    /**
     * 接收 Spring 创建的应用上下文。
     *
     * @param applicationContext 应用上下文
     */
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        context = applicationContext;
    }

    /**
     * 按类型获取 Bean。
     *
     * @param type Bean 类型
     * @param <T>  Bean 类型参数
     * @return 匹配的 Bean
     */
    public static <T> T getBean(Class<T> type) {
        return requireContext().getBean(type);
    }

    /**
     * 获取指定类型的全部 Bean。
     *
     * @param type Bean 类型
     * @param <T>  Bean 类型参数
     * @return Bean 名称到实例的映射
     */
    public static <T> Map<String, T> getBeans(Class<T> type) {
        return requireContext().getBeansOfType(type);
    }

    /**
     * @return 已初始化的 Spring 应用上下文
     */
    private static ApplicationContext requireContext() {
        ApplicationContext value = context;
        if (value == null)
            throw new IllegalStateException("The Spring application context has not been initialized.");
        return value;
    }
}
