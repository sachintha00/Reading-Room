package com.readingRoom.bookServie.service;

import java.util.List;
import java.util.Optional;

import com.readingRoom.bookServie.model.Supplier;

public interface SupplierService {

	public List<Supplier> getAllSupplier();
	public Optional<Supplier> getSupplier(long supplierId);
	public Optional<Supplier> getSupplierByName(String name);
	public Supplier addSupplier(Supplier supplier);
	public Supplier updateSupplier(Supplier supplier);
	public void removeSupplier(long supplierId);
}
