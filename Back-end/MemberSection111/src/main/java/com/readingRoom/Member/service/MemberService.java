package com.readingRoom.Member.service;

import java.util.List;

import com.readingRoom.Member.model.Member;

public interface MemberService {
	public List<Member> getAllMembers();
	public Member getMember(long memberId);
	public Member addMember(Member member);
	public Member updatedMember(Member member);
	public void removeMember(long memberId);
}