package com.readingRoom.MemberBook.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.readingRoom.MemberBook.modal.MemberBook;
import com.readingRoom.MemberBook.repository.MemberBookRepo;

@Service
public class MemberBookServiceImpl implements MemberBookService {

	@Autowired
	private MemberBookRepo memberBookRepo;

	@Override
	public List<MemberBook> getAllMembersAndBooks() {
		return memberBookRepo.findAll();
	}

	@Override
	public Optional<MemberBook> getMemberWithBook(long mbId) {
		return memberBookRepo.findById(mbId);
	}

	@Override
	public MemberBook addMemberBook(MemberBook memberBook) {
		memberBookRepo.save(memberBook);
		return memberBook;
	}

	@Override
	public void removeMemberBook(long parseLong) {
		memberBookRepo.deleteById(parseLong);
		
	}

	@Override
	public MemberBook updateMemberBook(MemberBook memberBook) {
		memberBookRepo.save(memberBook);
		return memberBook;
	}

}
