package com.readingRoom.bookServie.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.readingRoom.bookServie.dto.BookSupplier;
import com.readingRoom.bookServie.model.Book;
import com.readingRoom.bookServie.model.Supplier;
import com.readingRoom.bookServie.service.SupplierService;

@RestController
@CrossOrigin
@RequestMapping("/suppler-service")
public class SupplierController {
	
	@Autowired
	private SupplierService supplierService;
	
	@GetMapping("/supplierHome")
	public String home() {
		return "this is the supplier home page";
	}
	
	@GetMapping("/suppliers")
	public List<Supplier> getAllSupplier() {
		return this.supplierService.getAllSupplier();
	}
	
	@GetMapping("/suppliers/{supplierId}")
	public Optional<Supplier> getSupplier(@PathVariable String supplierId) {
		return this.supplierService.getSupplier(Long.parseLong(supplierId));
	}
	
	@GetMapping("/supplier/{name}")
	public Optional<Supplier> getSupplierByName(@PathVariable String name) {
		return this.supplierService.getSupplierByName(name);
	}
	
	@PostMapping("/book-supplier")
	public Supplier bookSupplier(@RequestBody BookSupplier bookSupplier) {
		return this.supplierService.addSupplier(bookSupplier.getBookSupplier());
	}
	
	@PostMapping("/supplier")
	public Supplier addSupplier(@RequestBody Supplier supplier) {
		return this.supplierService.addSupplier(supplier);
	}
	
	@PutMapping("/supplier")
	public Supplier updateSupplier(@RequestBody Supplier supplier) {
		return this.supplierService.updateSupplier(supplier);
	}
	
	@DeleteMapping("/supplier/{supplierId}")
	public ResponseEntity<HttpStatus> removeSupplier(@PathVariable String supplierId) {
		try {
			this.supplierService.removeSupplier(Long.parseLong(supplierId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
