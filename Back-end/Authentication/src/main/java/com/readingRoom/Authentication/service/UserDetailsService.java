package com.readingRoom.Authentication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.readingRoom.Authentication.model.UserLogin;
import com.readingRoom.Authentication.repository.UserLoginRepo;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

	@Autowired
	private UserLoginRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserLogin user = userRepo.findByUsername(username);
		if(user == null) {
			throw new UsernameNotFoundException("User Not Found");
		}
		return new UserDetailsServiceImpl(user);
	}

}
