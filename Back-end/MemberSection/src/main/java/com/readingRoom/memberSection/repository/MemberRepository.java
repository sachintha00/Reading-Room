package com.readingRoom.memberSection.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.readingRoom.memberSection.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{

}
