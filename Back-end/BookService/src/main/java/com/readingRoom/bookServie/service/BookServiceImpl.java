package com.readingRoom.bookServie.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.readingRoom.bookServie.model.Book;
import com.readingRoom.bookServie.repository.BookRepository;

@Service
public class BookServiceImpl implements BookService{

	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

	@Override
	public Optional<Book> getBook(long bookId) {
		return bookRepository.findById(bookId);
	}

	@Override
	public Optional<Book> getBookByName(String name) {
//		bookRepository.save(name);
		return null;
	}

	@Override
	public Book addBook(Book book) {
		bookRepository.save(book);
		return book;
	}

	@Override
	public Book updateBook(Book book) {
		bookRepository.save(book);
		return book;
	}

	@Override
	public void removeBook(long bookId) {
		bookRepository.deleteById(bookId);
		
	}

}
