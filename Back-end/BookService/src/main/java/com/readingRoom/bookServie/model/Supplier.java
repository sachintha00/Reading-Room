package com.readingRoom.bookServie.model;

public class Supplier {
	
	private long supplierId;
	private String name;
	private String nic;
	private String suppDate;
	private String description;
	
	public Supplier() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Supplier(String name, String nic, String suppDate, String description) {
		super();
		this.name = name;
		this.nic = nic;
		this.suppDate = suppDate;
		this.description = description;
	}

	public long getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(long supplierId) {
		this.supplierId = supplierId;
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

	public String getSuppDate() {
		return suppDate;
	}

	public void setSuppDate(String suppDate) {
		this.suppDate = suppDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Supplier [supplierId=" + supplierId + ", name=" + name + ", nic=" + nic + ", suppDate=" + suppDate
				+ ", description=" + description + "]";
	}
	
}
