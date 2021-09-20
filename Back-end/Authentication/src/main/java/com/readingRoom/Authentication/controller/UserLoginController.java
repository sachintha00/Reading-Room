package com.readingRoom.Authentication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserLoginController {
	
	@GetMapping("/")
	public String login() {
		return "login";
	}

	@GetMapping("/userlogin")
	public String home() {
		return "this is the userlogin home page";
	}
}
