package com.readingRoom.bookServie.controller;

import java.util.List;
import java.util.Optional;

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

import com.readingRoom.bookServie.model.Book;
import com.readingRoom.bookServie.service.BookService;

@RestController
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("/bookHome")
	public String home() {
		return "this is the book home page";
	}
	
	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return this.bookService.getAllBooks();
	}
	
	@GetMapping("/book/{bookId}")
	public Optional<Book> getBook(@PathVariable String bookId) {
		return this.bookService.getBook(Long.parseLong(bookId));
	}
	
//	@GetMapping("/book/{name}")
//	public Optional<Book> getBookByName(@PathVariable String name) {
//		return this.bookService.getBookByName(name);
//	}
	
	@PostMapping("/book")
	public Book addBook(@RequestBody Book book) {
		return this.bookService.addBook(book);
	}
	
	@PutMapping("/book")
	public Book updateBook(@RequestBody Book book) {
		return this.bookService.updateBook(book);
	}
	
	@DeleteMapping("/book/{bookId}")
	public ResponseEntity<HttpStatus> removeBook(@PathVariable String bookId) {
		try {
			this.bookService.removeBook(Long.parseLong(bookId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
