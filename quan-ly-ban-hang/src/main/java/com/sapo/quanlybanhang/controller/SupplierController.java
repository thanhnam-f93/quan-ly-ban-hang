package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.ProductEntity;
import com.sapo.quanlybanhang.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1")
public class SupplierController {
    @Autowired
    private SupplierService supplierService;

    @GetMapping(value = "/suppliers")
    public List<SupplierDto> getAll(){
        return supplierService.getAll();
    }

    @GetMapping(value = "/suppliers/{id}")
    public SupplierDto getById(@PathVariable int id){
        return supplierService.findById(id);
    }
    @GetMapping(value = "/supplier_day")
    public List<ProductDto> filterByDay() {
        return supplierService.getAllByDay();
    }
    @GetMapping(value = "/modified_by/{keyword}")
    public List<ProductDto> filterByModified(@PathVariable String keyword) {
        return supplierService.getByModified(keyword);
    }

    @GetMapping(value = "/suppliers_search/{keyword}")
    public List<SupplierDto> search(@PathVariable String keyword) {
        return supplierService.findAll(keyword);
    }

    @PostMapping(value = "/suppliers")
    public SupplierDto create(@RequestBody SupplierDto supplierDto) {
        supplierService.create(supplierDto);
        return supplierDto;
    }
    @PutMapping(value = "/suppliers/{id}")
    public ResponseEntity<SupplierDto> update(@PathVariable int id, @RequestBody SupplierDto supplierDto) {

        supplierService.update(id, supplierDto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/supplier")
    public List<SupplierDto> findPaginated(@RequestParam int page) {
        int pageSize = 2;
        return supplierService.findPaginated(page ,pageSize);

    }

}
