package com.ajaxjs.workflow;

import com.ajaxjs.util.cache.CacheManager;
import com.ajaxjs.util.cache.MemoryCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WfWebConfig implements WebMvcConfigurer {
    @Bean
    CacheManager MemoryCacheManager() {
        return new MemoryCacheManager();
    }

}
