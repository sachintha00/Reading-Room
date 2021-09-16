package com.readingRoom.memberSection.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.readingRoom.memberSection.model.Member;
import com.readingRoom.memberSection.repository.MemberRepository;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired
	private MemberRepository memberRepository;

	@Override
	public List<Member> getAllMembers() {
		return memberRepository.findAll();
	}

	@Override
	public Optional<Member> getMember(long memberId) {
		return memberRepository.findById(memberId);
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
	public void removeMember(long memberId) {
//		Member entity = memberRepository.getOne(memberId);
//		memberRepository.delete(entity);
		
		memberRepository.deleteById(memberId);
		
	}

	@Override
	public Optional<Member> getMemberByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
