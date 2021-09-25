package com.readingRoom.bookServie.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinTable(name = "FK_BOOKS", joinColumns = @JoinColumn(referencedColumnName = "bookId"),inverseJoinColumns = @JoinColumn(referencedColumnName ="supplierId"))
	private List<Supplier> suppliers;
	
	
	public long getBookId() {
		return bookId;
	}
	public List<Supplier> getSuppliers() {
		return suppliers;
	}
	public void setSuppliers(List<Supplier> suppliers) {
		this.suppliers = suppliers;
	}
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
