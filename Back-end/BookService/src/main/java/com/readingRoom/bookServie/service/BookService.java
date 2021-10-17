package com.readingRoom.bookServie.service;

import java.util.List;
import java.util.Optional;

import com.readingRoom.bookServie.model.Book;

public interface BookService {
	public List<Book> getAllBooks();
	public Optional<Book> getBook(long bookId);
	public Optional<Book> getBookByName(String name);
	public Book addBook(Book book);
	public Book updateBook(Book book);
	public void removeBook(long bookId);

}
