// package com.shareitinerary.gateway_service.Configurations;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.function.RouterFunction;
// import static org.springframework.web.servlet.function.RouterFunctions.route;
// import static org.springframework.cloud.gateway.server.mvc.handler.HandlerFunctions.http;
// import org.springframework.web.servlet.function.ServerResponse;

// @Configuration
// public class GatewayConfig {
//     @Bean
//     public RouterFunction<ServerResponse> getRoute() {
//         return route().GET("/get", http("https://httpbin.org")).build();
//     }
// }
