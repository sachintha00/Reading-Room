package com.readingRoom.MemberBook.modal;

import javax.persistence.Entity;

@Entity
public class BookMember {
	private long bookId;
	private long memberId;
	private String bookName;
	private String memberName;
	private String issueDate;
	private String returnDate;
	
}
