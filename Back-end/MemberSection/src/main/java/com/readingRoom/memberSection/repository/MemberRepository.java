package com.readingRoom.memberSection.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.readingRoom.memberSection.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{

}
