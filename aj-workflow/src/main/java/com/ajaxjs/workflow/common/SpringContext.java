package com.ajaxjs.workflow.common;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

import java.util.Map;

/** Minimal Spring context bridge used by legacy static workflow entry points. */
@Component
public final class SpringContext implements ApplicationContextAware {
    private static volatile ApplicationContext context;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        context = applicationContext;
    }

    /** Returns a bean by type. */
    public static <T> T getBean(Class<T> type) {
        return requireContext().getBean(type);
    }

    /** Returns all beans assignable to the supplied type. */
    public static <T> Map<String, T> getBeans(Class<T> type) {
        return requireContext().getBeansOfType(type);
    }

    private static ApplicationContext requireContext() {
        ApplicationContext value = context;
        if (value == null)
            throw new IllegalStateException("The Spring application context has not been initialized.");
        return value;
    }
}
