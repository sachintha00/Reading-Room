package com.readingRoom.bookServie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.readingRoom.bookServie.model.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {

}
