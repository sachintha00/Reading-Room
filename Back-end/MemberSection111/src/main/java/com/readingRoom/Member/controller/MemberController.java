package com.readingRoom.Member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.readingRoom.Member.model.Member;
import com.readingRoom.Member.service.MemberService;

@RestController
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	@GetMapping("/member")
	public String home() {
		return "this is the member page";
	}
	
	@GetMapping("/members")
	public List<Member> getAllMembers() {
		return this.memberService.getAllMembers();
	}
	
	@GetMapping("/member/{memberId}")
	public Member getMember(@PathVariable String memberId) {
		return this.memberService.getMember(Long.parseLong(memberId));
	}
	
	@PostMapping("/member")
	public Member addMember(@RequestBody Member member) {
		return this.memberService.addMember(member);
	}
	
	@PutMapping("/member")
	public Member updatedMember(@RequestBody Member member) {
		return this.memberService.updatedMember(member);
	}
	
	@DeleteMapping("/member/{memberId}")
	public ResponseEntity<HttpStatus> removeMember(@PathVariable String memberId) {
		try {
			this.memberService.removeMember(Long.parseLong(memberId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
