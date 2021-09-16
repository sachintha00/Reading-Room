package com.readingRoom.memberSectionservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.readingRoom.memberSection.model.Member;
import com.readingRoom.memberSection.repository.MemberRepository;

public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberRepository memberRepository;
	
	@Override
	public List<Member> getAllMembers() {
		return memberRepository.findAll();
	}

	@Override
	public Member getMember(long memberId) {
		return memberRepository.getById(memberId);
	}

	@Override
	public Member addMember(Member member) {
		memberRepository.save(member);
		return member;
	}

	@Override
	public Member updatedMember(Member member) {
		memberRepository.save(member);
		return member;
	}

	@Override
	public void removeMember(long Member) {
		Member entity = memberRepository.getOne(Member);
		memberRepository.delete(entity);
		
	}
}
