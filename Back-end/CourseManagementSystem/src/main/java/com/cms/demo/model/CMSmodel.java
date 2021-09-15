package com.cms.demo.model;

import javax.persistence.Entity;

@Entity
public class CMSmodel {

	private long coursId;
	private String title;
	private String description;
	
	public CMSmodel(long coursId, String title, String description) {
		super();
		this.coursId = coursId;
		this.title = title;
		this.description = description;
	}

	public CMSmodel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getCoursId() {
		return coursId;
	}

	public void setCoursId(long coursId) {
		this.coursId = coursId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "CMSmodel [coursId=" + coursId + ", title=" + title + ", description=" + description + "]";
	}
	
	
}
