package com.readingRoom.MemberBook.modal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MemberBook {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long bookMemberId;
	private long bookId;
	private long memberId;
	private String bookName;
	private String memberName;
	private String issueDate;
	private String returnDate;
	public MemberBook() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MemberBook(long bookId, long memberId, String bookName, String memberName, String issueDate,
			String returnDate) {
		super();
		this.bookId = bookId;
		this.memberId = memberId;
		this.bookName = bookName;
		this.memberName = memberName;
		this.issueDate = issueDate;
		this.returnDate = returnDate;
	}
	public long getBookId() {
		return bookId;
	}
	public void setBookId(long bookId) {
		this.bookId = bookId;
	}
	public long getMemberId() {
		return memberId;
	}
	public void setMemberId(long memberId) {
		this.memberId = memberId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getIssueDate() {
		return issueDate;
	}
	public void setIssueDate(String issueDate) {
		this.issueDate = issueDate;
	}
	public String getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}
	
	public long getBookMemberId() {
		return bookMemberId;
	}
	@Override
	public String toString() {
		return "BookMember [bookId=" + bookId + ", memberId=" + memberId + ", bookName=" + bookName + ", memberName="
				+ memberName + ", issueDate=" + issueDate + ", returnDate=" + returnDate + "]";
	}
	
	
}
