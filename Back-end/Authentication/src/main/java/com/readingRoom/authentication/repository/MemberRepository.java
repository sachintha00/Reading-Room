package com.readingRoom.authentication.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.readingRoom.authentication.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
