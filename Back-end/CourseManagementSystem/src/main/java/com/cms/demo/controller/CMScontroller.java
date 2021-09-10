package com.cms.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CMScontroller {

	@GetMapping("/home")
	public String home() {
		return "this is the home page";
	}
}
