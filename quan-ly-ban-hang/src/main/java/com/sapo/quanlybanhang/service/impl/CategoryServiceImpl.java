package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.Converter;
import com.sapo.quanlybanhang.dto.CategoryDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.entity.CategoryEntity;
import com.sapo.quanlybanhang.entity.ProductEntity;
import com.sapo.quanlybanhang.repository.CategoryRepository;
import com.sapo.quanlybanhang.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public List<CategoryDto> getAll() {
        List<CategoryEntity> categoryEntities = categoryRepository.findAll();
        List<CategoryDto> categoryDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (CategoryEntity item : categoryEntities) {
            categoryDtos.add(converter.ConverterToDtoCategory(item));
        }
        return categoryDtos;
    }

    @Override
    public CategoryDto findById(int id) {
        CategoryEntity categoryEntity = categoryRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found."));
        List<ProductEntity> productEntities = categoryEntity.getProductEntities();
        List<ProductDto> productDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (ProductEntity item : productEntities) {
            productDtos.add(converter.ConverterToDtoProduct(item));
        }
        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setId(categoryEntity.getId());
        categoryDto.setCode(categoryEntity.getCode());
        categoryDto.setName(categoryEntity.getName());
        categoryDto.setProductDtoList(productDtos);

        return categoryDto;
    }


}
