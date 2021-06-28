package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.CategoryDto;
import com.sapo.quanlybanhang.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping(value = "/categories")
    public List<CategoryDto> getAll(){
        return categoryService.getAll();
    }
}
