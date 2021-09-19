package com.readingRoom.bookServie.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.readingRoom.bookServie.model.Book;
import com.readingRoom.bookServie.repository.BookRepository;

public class BookServiceImpl implements BookService{

	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
		return null;
	}

	@Override
	public Optional<Book> getBook(long bookId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Book> getBookByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Book addBook(Book book) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Book updateBook(Book book) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void removeBook(long bookId) {
		// TODO Auto-generated method stub
		
	}

}
