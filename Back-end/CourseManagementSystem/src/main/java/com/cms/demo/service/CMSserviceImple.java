package com.cms.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cms.demo.model.CMSmodel;

@Service
public class CMSserviceImple implements CMSservice {

	List<CMSmodel> list;
	
	public CMSserviceImple() {
		list = new ArrayList<>();
		
		list.add(new CMSmodel(145,"java core course","this course contain base of java"));
		list.add(new CMSmodel(4343,"Spring boot course","this course contain base of spring boot"));
		list.add(new CMSmodel(145,"Angular course","this course contain base of Angular"));
	}
	
	@Override
	public List<CMSmodel> getCourses() {
		return list;
	}

	@Override
	public CMSmodel getCourse(long courseId) {
		CMSmodel c = null;
		for(CMSmodel course : list) {
			if(course.getCoursId() == courseId) {
				c = course;
				break;
			}
		}
		return c;
	}

	@Override
	public CMSmodel addCourse(CMSmodel course) {
		list.add(course);
		return course;
	}
	
	@Override
	public CMSmodel updateCourse(CMSmodel course) {
		list.forEach(e->{
			if(e.getCoursId() == course.getCoursId()) {
				e.setTitle(course.getTitle());
				e.setDescription(course.getDescription());
			}
		});
		
		return course;
	}

}
