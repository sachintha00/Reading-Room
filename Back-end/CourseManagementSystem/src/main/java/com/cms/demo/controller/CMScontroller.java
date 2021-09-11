package com.cms.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cms.demo.model.CMSmodel;
import com.cms.demo.service.CMSservice;

@RestController
public class CMScontroller {
	
	@Autowired
	private CMSservice cmSservice;
	
	@GetMapping("/home")
	public String home() {
		return "this is the home page";
	}
	
	@GetMapping("/cources")
	public List<CMSmodel> getCources() {
		return this.cmSservice.getCources();
	}
}
