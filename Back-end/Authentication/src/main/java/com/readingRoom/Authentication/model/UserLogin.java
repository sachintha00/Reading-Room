package com.readingRoom.Authentication.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserLogin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long rollId;
	private String rollName;
	private String password;
	private String username;
	
	
	public UserLogin() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getRollName() {
		return rollName;
	}


	public void setRollName(String rollName) {
		this.rollName = rollName;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	@Override
	public String toString() {
		return "UserLogin [rollId=" + rollId + ", rollName=" + rollName + ", password=" + password + ", username="
				+ username + "]";
	}
	
}
