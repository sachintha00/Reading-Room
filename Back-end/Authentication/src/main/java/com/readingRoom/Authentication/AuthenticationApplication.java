package com.readingRoom.Authentication;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.readingRoom.Authentication.model.User;
import com.readingRoom.Authentication.repository.UserRepository;

@SpringBootApplication
public class AuthenticationApplication {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired 
	private UserRepository userRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AuthenticationApplication.class, args);
	}
	
	@PostConstruct
	protected void init() {

		
		User user= new User();
		
		user.setUserName("madhawa");
		user.setFirstName("sachintha");
		user.setLastName("madhawa");
		user.setEmail("sachintha@gmail.com");
		user.setPhoneNumber("0788538399");
		
		user.setPassword(passwordEncoder.encode("madhawa@123"));
		user.setEnabled(true);
		
		userRepository.save(user);
		
		
		
	}

}
