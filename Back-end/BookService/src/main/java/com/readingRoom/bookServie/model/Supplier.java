package com.readingRoom.bookServie.model;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Table(name = "Supplier")
@Entity
public class Supplier {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long supplierId;
	private String name;
	private String nic;
	private String mobileNumber;
	private String description;
	

//	@OneToMany(targetEntity = Book.class,cascade = CascadeType.ALL)
//	@JoinColumn(name = "sb_fk",referencedColumnName = "supplierId")
//	private List<Book> books;
//
//	public List<Book> getBooks() {
//		return books;
//	}
//
//	public void setBooks(List<Book> books) {
//		this.books = books;
//	}

	public Supplier() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Supplier(String name, String nic, String suppDate, String description) {
		super();
		this.name = name;
		this.nic = nic;
		this.description = description;
	}
	

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public long getSupplierId() {
		return supplierId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNic() {
		return nic;
	}

	public void setNic(String nic) {
		this.nic = nic;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Supplier [supplierId=" + supplierId + ", name=" + name + ", nic=" + nic + ", description=" + description + "]";
	}
	
}
