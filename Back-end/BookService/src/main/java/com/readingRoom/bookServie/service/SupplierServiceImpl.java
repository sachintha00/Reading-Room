package com.readingRoom.bookServie.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.readingRoom.bookServie.model.Supplier;
import com.readingRoom.bookServie.repository.SupplierRepository;

@Service
public class SupplierServiceImpl implements SupplierService{
	
	@Autowired
	private SupplierRepository supplierRepository;

	@Override
	public List<Supplier> getAllSupplier() {
		return supplierRepository.findAll();
	}

	@Override
	public Optional<Supplier> getSupplier(long supplierId) {
		return supplierRepository.findById(supplierId);
	}

	@Override
	public Optional<Supplier> getSupplierByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Supplier addSupplier(Supplier supplier) {
		supplierRepository.save(supplier);
		return supplier;
	}

	@Override
	public Supplier updateSupplier(Supplier supplier) {
		supplierRepository.save(supplier);
		return supplier;
	}

	@Override
	public void removeSupplier(long supplierId) {
		supplierRepository.deleteById(supplierId);
		
	}

}
