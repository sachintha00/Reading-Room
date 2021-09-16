package com.readingRoom.memberSection.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "member")
public class Member {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long memberId;
	private String memberName;
	private String memberNic;
	private String memberAddress;
	private String memberMobile;
	private String memberGmail;
	
	public Member() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Member(String memberName, String memberNic, String memberAddress, String memberMobile, String memberGmail) {
		super();
		this.memberName = memberName;
		this.memberNic = memberNic;
		this.memberAddress = memberAddress;
		this.memberMobile = memberMobile;
		this.memberGmail = memberGmail;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getMemberNic() {
		return memberNic;
	}
	public void setMemberNic(String memberNic) {
		this.memberNic = memberNic;
	}
	public String getMemberAddress() {
		return memberAddress;
	}
	public void setMemberAddress(String memberAddress) {
		this.memberAddress = memberAddress;
	}
	public String getMemberMobile() {
		return memberMobile;
	}
	public void setMemberMobile(String memberMobile) {
		this.memberMobile = memberMobile;
	}
	public String getMemberGmail() {
		return memberGmail;
	}
	public void setMemberGmail(String memberGmail) {
		this.memberGmail = memberGmail;
	}
	@Override
	public String toString() {
		return "Member [memberId=" + memberId + ", memberName=" + memberName + ", memberNic=" + memberNic
				+ ", memberAddress=" + memberAddress + ", memberMobile=" + memberMobile + ", memberGmail=" + memberGmail
				+ "]";
	}
}
