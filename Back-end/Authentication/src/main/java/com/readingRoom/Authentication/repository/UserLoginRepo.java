package com.readingRoom.Authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.readingRoom.Authentication.model.UserLogin;

@Repository
public interface UserLoginRepo extends JpaRepository<UserLogin, Long>{

	UserLogin findByUsername(String username);
}
