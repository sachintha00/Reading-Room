package com.readingRoom.memberSection.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import com.readingRoom.memberSection.model.Member;

public interface MemberService {
	public List<Member> getAllMembers();
	public Optional<Member> getMember(long memberId);
	public Member addMember(Member member);
	public Member updatedMember(Member member);
	public void removeMember(long memberId);
	
	@Query("SELECT md FROM member md WHERE md.memberName = ?1")
	public Optional<Member> getMemberByName(String name);
}
