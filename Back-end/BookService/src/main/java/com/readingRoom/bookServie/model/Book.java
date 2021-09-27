package com.readingRoom.bookServie.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Table(name = "BOOK")
@Entity
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long bookId;
	private String ISBN;
	private String bookName;
	private String bookType;
	private String medium;
	private String AuthorName;
	
	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "supplier_id",nullable = false)
	private Supplier supplier;
	
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Book(String iSBN, String bookName, String bookType, String medium, String authorName, Supplier supplier) {
		super();
		ISBN = iSBN;
		this.bookName = bookName;
		this.bookType = bookType;
		this.medium = medium;
		AuthorName = authorName;
		this.supplier = supplier;
	}

	public Supplier getSupplier() {
		return supplier;
	}
	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}
	
	public long getBookId() {
		return bookId;
	}
	public String getISBN() {
		return ISBN;
	}
	public void setISBN(String iSBN) {
		ISBN = iSBN;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookType() {
		return bookType;
	}
	public void setBookType(String bookType) {
		this.bookType = bookType;
	}
	public String getMedium() {
		return medium;
	}
	public void setMedium(String medium) {
		this.medium = medium;
	}
	public String getAuthorName() {
		return AuthorName;
	}
	public void setAuthorName(String authorName) {
		AuthorName = authorName;
	}
	@Override
	public String toString() {
		return "Book [bookId=" + bookId + ", ISBN=" + ISBN + ", bookName=" + bookName + ", bookType=" + bookType
				+ ", medium=" + medium + ", AuthorName=" + AuthorName + ", supplier=" + supplier + "]";
	}
	
	
	
	
}
