package com.hospitalManagement.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.context.ServletWebServerInitializedEvent;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class HospitalManagementApplication  extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(HospitalManagementApplication.class, args);
	} 
 
}
