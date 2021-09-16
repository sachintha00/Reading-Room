package com.readingRoom.authentication.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.readingRoom.authentication.model.Member;
import com.readingRoom.authentication.repository.MemberRepository;

public class MemberServiceImpl implements MemberService {

	
	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public List<Member> getAllMembers() {
		return memberRepository.findAll();
	}

	@Override
	public Member getCourse(long memberId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member addMember(Member member) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member updatedMember(Member member) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeMember(long memberId) {
		// TODO Auto-generated method stub
		
	}

}
