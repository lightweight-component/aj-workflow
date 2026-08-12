package com.ajaxjs.workflow;

import com.ajaxjs.util.cache.CacheManager;
import com.ajaxjs.util.cache.MemoryCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/** 工作流组件的 Spring MVC 配置，提供默认的内存缓存管理器。 */
@Configuration
public class WfWebConfig implements WebMvcConfigurer {
    /**
     * 创建供流程定义缓存使用的内存缓存管理器。
     *
     * @return 内存缓存管理器
     */
    @Bean
    CacheManager memoryCacheManager() {
        return new MemoryCacheManager();
    }

}
