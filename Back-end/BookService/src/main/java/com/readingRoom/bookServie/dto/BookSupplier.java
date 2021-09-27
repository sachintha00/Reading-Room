package com.readingRoom.bookServie.dto;

import com.readingRoom.bookServie.model.Supplier;


public class BookSupplier {
	
	private Supplier bookSupplier;

	public BookSupplier() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookSupplier(Supplier bookSupplier) {
		super();
		this.bookSupplier = bookSupplier;
	}

	public Supplier getBookSupplier() {
		return bookSupplier;
	}

	public void setBookSupplier(Supplier bookSupplier) {
		this.bookSupplier = bookSupplier;
	}

	@Override
	public String toString() {
		return "BookSupplier [bookSupplier=" + bookSupplier + "]";
	}
	
	
}
