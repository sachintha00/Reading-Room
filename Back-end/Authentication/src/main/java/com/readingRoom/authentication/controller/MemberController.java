package com.readingRoom.authentication.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
	
	
	@GetMapping("/member")
	public String home() {
		return "this is the member page";
	}
	
//	@GetMapping("/courses")
//	public List<CMSmodel> getCources() {
//		return this.cmSservice.getCourses();
//	}
//	
//	@GetMapping("/course/{courseID}")
//	public CMSmodel getCourse(@PathVariable String courseID) {
//		return courseDao.getById(Long.parseLong(courseID));
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
