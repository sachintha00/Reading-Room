package com.readingRoom.Authentication.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.readingRoom.Authentication.request.AuthenticateRequest;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class UserLoginController {
	
//	@PostMapping("/login")
//	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticateRequest authenticationRequest) throws Exception 
//	{
//		//authenticate(authenticationRequest.getUsername(), 
//		authenticationRequest.getPassword());
//		final UserDetails userDetails = 
//		 userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
//		//JwtUserDetails userDetails = new JwtUserDetails();
//		//userDetails.setUsername(authenticationRequest.getUsername());
//			
//			
////		final String token = jwtTokenUtil.generateToken(userDetails);
//		return ResponseEntity.ok(response);
//	}
	@GetMapping("/login")
	public String home() {
		return "this is the userlogin home page";
	}
}
