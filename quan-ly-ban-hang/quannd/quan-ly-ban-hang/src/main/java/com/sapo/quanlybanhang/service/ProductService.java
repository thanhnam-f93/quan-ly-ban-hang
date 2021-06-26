package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.InputProductDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.entity.ProductEntity;

import java.util.List;

public interface ProductService <t>{
    List<t> getAll();
    ProductDto create(InputProductDto inputProductDTO);
     ProductDto findById(int id);
    ProductEntity update(int id, ProductEntity productEntity);

}
