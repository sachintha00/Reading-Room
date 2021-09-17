package com.readingRoom.bookServie.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.readingRoom.bookServie.model.Supplier;

@RestController
public class SupplierController {
	
	@GetMapping("/supplierHome")
	public String home() {
		return "this is the supplier home page";
	}
	
	@GetMapping("/suppliers")
	public List<Supplier> getAllSupplier() {
		return this.bookService.getAllSupplier();
	}
	
	@GetMapping("/supplier/{supplierId}")
	public Optional<Supplier> getSupplier(@PathVariable String supplierId) {
		return this.bookService.getSupplier(Long.parseLong(supplierId));
	}
	
	@GetMapping("/supplier/{name}")
	public Optional<Supplier> getSupplierByName(@PathVariable String name) {
		return this.bookService.getSupplierByName(name);
	}
	
	@PostMapping("/supplier")
	public Supplier addSupplier(@RequestBody Supplier supplier) {
		return this.bookService.addSupplier(supplier);
	}
	
	@PutMapping("/supplier")
	public Supplier updateSupplier(@RequestBody Supplier supplier) {
		return this.bookService.updateSupplier(supplier);
	}
	
	@DeleteMapping("/supplier/{supplierId}")
	public ResponseEntity<HttpStatus> removeSupplier(@PathVariable String supplierId) {
		try {
			this.bookService.removeSupplier(Long.parseLong(supplierId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
