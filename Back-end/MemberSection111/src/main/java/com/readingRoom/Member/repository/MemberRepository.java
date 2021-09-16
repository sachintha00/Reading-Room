package com.readingRoom.Member.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.readingRoom.Member.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
