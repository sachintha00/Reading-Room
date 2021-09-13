package com.cms.demo.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.cms.demo.model.CMSmodel;

public interface CMSservice {

	public List<CMSmodel> getCourses();
	public CMSmodel getCourse(long courseId);
	public CMSmodel addCourse(CMSmodel course);
	public CMSmodel updateCourse(CMSmodel course);
	public ResponseEntity<HttpStatus> deleteCourse(long courseId);
}
