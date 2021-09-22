package com.readingRoom.Authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.readingRoom.Authentication.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findByUserName(String userName);
	
}
