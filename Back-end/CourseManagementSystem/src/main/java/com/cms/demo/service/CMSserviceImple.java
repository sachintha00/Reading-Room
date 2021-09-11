package com.cms.demo.service;

import java.util.ArrayList;
import java.util.List;

import com.cms.demo.model.CMSmodel;

public class CMSserviceImple implements CMSservice {

	List<CMSmodel> list;
	
	public CMSserviceImple() {
		list = new ArrayList<>();
		
		list.add(new CMSmodel(145,"java core course","this course contain base of java"));
		list.add(new CMSmodel(4343,"Spring boot course","this course contain base of spring boot"));
		list.add(new CMSmodel(145,"Angular course","this course contain base of Angular"));
	}
	
	@Override
	public List<CMSmodel> getCources() {
		return list;
	}

}
