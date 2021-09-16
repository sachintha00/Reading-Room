package com.readingRoom.authentication.service;

import java.util.List;

import com.readingRoom.authentication.model.Member;

public interface MemberService {
	public List<Member> getAllMembers();
	public Member getCourse(long memberId);
	public Member addMember(Member member);
	public Member updatedMember(Member member);
	public void removeMember(long memberId);
}
