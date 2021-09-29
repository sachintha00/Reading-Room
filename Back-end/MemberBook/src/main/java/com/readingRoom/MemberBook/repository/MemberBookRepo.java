package com.readingRoom.MemberBook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.readingRoom.MemberBook.modal.MemberBook;

public interface MemberBookRepo extends JpaRepository<MemberBook, Long> {

}
