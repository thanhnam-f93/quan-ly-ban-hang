package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.ProductDto;

import java.util.List;

public interface CategoryService <t>{
    List<t> getAll();
    ProductDto findById(int id);
}
