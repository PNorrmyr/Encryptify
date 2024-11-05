package com.example;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Tillåt alla endpoints under /api/**
                .allowedOrigins("http://localhost:3000") // Byt ut detta mot din frontend-url
                .allowedMethods("POST", "GET", "PUT", "DELETE", "OPTIONS");
    }
}
