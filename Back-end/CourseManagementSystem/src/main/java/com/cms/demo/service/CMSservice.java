package com.cms.demo.service;

import java.util.List;

import com.cms.demo.model.CMSmodel;

public interface CMSservice {

	public List<CMSmodel> getCourses();
	public CMSmodel getCourse(long courseId);
	public CMSmodel addCourse(CMSmodel course);
	public CMSmodel updateCourse(CMSmodel course);
}
