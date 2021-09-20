package com.readingRoom.Authentication.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AdminLogin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long adminId;
	private String name;
	private String nic;
	private String address;
	private String mobile;
	
	public AdminLogin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNic() {
		return nic;
	}

	public void setNic(String nic) {
		this.nic = nic;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "AdminLogin [adminId=" + adminId + ", name=" + name + ", nic=" + nic + ", address=" + address
				+ ", mobile=" + mobile + "]";
	}
	
}
