package com.readingRoom.MemberBook.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.readingRoom.MemberBook.modal.MemberBook;
import com.readingRoom.MemberBook.service.MemberBookService;

@RestController
@CrossOrigin
@RequestMapping("/book-member")
public class MemerBookController {
	
	@Autowired
	private MemberBookService mbService;
	
	@GetMapping("/home")
	public String home() {
		return "this is the book home page";
	}
	
	@GetMapping("/member-books")
	public List<MemberBook> getAllMembersAndBooks() {
		return this.mbService.getAllMembersAndBooks();
	}
	
	@GetMapping("/member-books/{mbId}")
	public Optional<MemberBook> getBook(@PathVariable String mbId) {
		return this.mbService.getMemberWithBook(Long.parseLong(mbId));
	}
	
	@PostMapping("/member-book")
	public MemberBook addBook(@RequestBody MemberBook memberBook) {
		return this.mbService.addMemberBook(memberBook);
	}
	
	@PutMapping("/member-book")
	public MemberBook updateBook(@RequestBody MemberBook memberBook) {
		return this.mbService.updateMemberBook(memberBook);
	}
	
	@DeleteMapping("/member-books/{mbId}")
	public ResponseEntity<HttpStatus> removeBook(@PathVariable String mbId) {
		try {
			this.mbService.removeMemberBook(Long.parseLong(mbId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
