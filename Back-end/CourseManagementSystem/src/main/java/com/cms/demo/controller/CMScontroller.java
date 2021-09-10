package com.cms.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.demo.model.CMSmodel;

@RestController
public class CMScontroller {
	
	@GetMapping("/home")
	public String home() {
		return "this is the home page";
	}
	
	@GetMapping("/cources")
	public List<CMSmodel> getCources() {
		return null;
	}
}
