package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.CategoryDto;

import java.util.List;

public interface CategoryService<t> {
    List<t> getAll();

    CategoryDto findById(int id);
}
