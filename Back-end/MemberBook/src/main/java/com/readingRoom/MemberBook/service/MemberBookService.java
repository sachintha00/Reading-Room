package com.readingRoom.MemberBook.service;

import java.util.List;
import java.util.Optional;

import com.readingRoom.MemberBook.modal.MemberBook;

public interface MemberBookService {

	List<MemberBook> getAllMembersAndBooks();

	Optional<MemberBook> getMemberWithBook(long mbId);

	MemberBook addMemberBook(MemberBook memberBook);

	void removeMemberBook(long parseLong);

	MemberBook updateMemberBook(MemberBook memberBook);

}
