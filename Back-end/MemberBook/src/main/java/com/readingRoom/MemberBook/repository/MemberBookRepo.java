package com.readingRoom.MemberBook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberBookRepo extends JpaRepository<MemberBookRepo, Long> {

}
