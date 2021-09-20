package com.readingRoom.Authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.readingRoom.Authentication.model.UserLogin;

public interface UserLoginRepo extends JpaRepository<UserLogin, Long>{

	UserLogin findByUsername(String username);
}
