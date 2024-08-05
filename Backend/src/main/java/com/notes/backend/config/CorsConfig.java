package com.notes.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET","DELETE", "POST", "PUT", "PATCH", "OPTIONS")
                .allowedHeaders("Content-Type", "Authorization", "credential", "Accept")
                .maxAge(3600);
    }

}
