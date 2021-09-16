package com.readingRoom.authentication.controller;

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

import com.readingRoom.authentication.model.Member;
import com.readingRoom.authentication.service.MemberService;

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
//	
//	@GetMapping("/member/{memberId}")
//	public Member getCourse(@PathVariable String memberId) {
//		return this.memberService.getCourse(Long.parseLong(memberId));
//	}
//	
//	@PostMapping("/courses")
//	public CMSmodel addCourse(@RequestBody CMSmodel course) {
//		return this.cmSservice.addCourse(course);
//	}
//	
//	@PutMapping("/courses")
//	public CMSmodel updateCourse(@RequestBody CMSmodel course) {
//		return this.cmSservice.updateCourse(course);
//	}
//	
//	@DeleteMapping("/courses/{courseID}")
//	public ResponseEntity<HttpStatus> updateCourse(@PathVariable String courseID) {
//		try {
//			this.cmSservice.deleteCourse(Long.parseLong(courseID));
//			return new ResponseEntity<>(HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
}
