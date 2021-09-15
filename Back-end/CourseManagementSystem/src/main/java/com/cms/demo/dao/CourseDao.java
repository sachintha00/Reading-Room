package com.cms.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cms.demo.model.CMSmodel;

public interface CourseDao extends JpaRepository<CMSmodel, Long>{

}
