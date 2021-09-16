package com.readingRoom.bookServie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.readingRoom.bookServie.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
