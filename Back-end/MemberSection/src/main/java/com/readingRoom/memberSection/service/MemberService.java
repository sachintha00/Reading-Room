package com.readingRoom.memberSection.service;

import java.util.List;
import java.util.Optional;

import com.readingRoom.memberSection.model.Member;

public interface MemberService {
	public List<Member> getAllMembers();
	public Optional<Member> getMember(long memberId);
	public Member addMember(Member member);
	public Member updatedMember(Member member);
	public void removeMember(long memberId);
}
