package com.readingRoom.bookServie.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
	
	
//	@OneToMany
//	@JoinColumn(name = "supplierId", referencedColumnName = "supplierId")
//	private Supplier supplier;
//	
//	public Supplier getSupplier() {
//		return supplier;
//	}
	
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Book(String iSBN, String bookName, String bookType, String medium, String authorName) {
		super();
		ISBN = iSBN;
		this.bookName = bookName;
		this.bookType = bookType;
		this.medium = medium;
		AuthorName = authorName;
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
				+ ", medium=" + medium + ", AuthorName=" + AuthorName + "]";
	}
	
	
	
}
