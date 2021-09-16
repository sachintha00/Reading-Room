package com.readingRoom.memberSection.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

	@GetMapping("/memberHome")
	public String home() {
		return "this is the member page";
	}
}
