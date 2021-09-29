package com.readingRoom.MemberBook.service;

import java.util.List;
import java.util.Optional;

import com.readingRoom.MemberBook.modal.MemberBook;

public interface MemberBookService {

	public List<MemberBook> getAllMembersAndBooks();

	public Optional<MemberBook> getMemberWithBook(long mbId);

	public MemberBook addMemberBook(MemberBook memberBook);

	public void removeMemberBook(long parseLong);

	public MemberBook updateMemberBook(MemberBook memberBook);

}
