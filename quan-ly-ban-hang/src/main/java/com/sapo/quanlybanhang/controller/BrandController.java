package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.BrandDto;
import com.sapo.quanlybanhang.dto.SupplierDto;
import com.sapo.quanlybanhang.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "api/v1")
public class BrandController {
    @Autowired
    private BrandService brandService;

    @GetMapping(value = "/brands")
    public List<BrandDto> getAll(){
        return brandService.getAll();
    }


    @PostMapping(value = "/brands")
    public BrandDto create(@RequestBody BrandDto brandDto) {
        brandService.create(brandDto);
        return brandDto;
    }
}
