package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.InputProductDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.dto.UpdateDto;
import com.sapo.quanlybanhang.entity.ProductEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductService <t>{
    List<t> getAll();
    ProductDto create(InputProductDto inputProductDTO);
    ProductDto findById(int id);
    ProductEntity update(int id, ProductEntity productEntity);
    List<t> findAll(String keyword);
    List<t> getAllByDay();
    List<t> getAllByMonth();
    List<t> sortByName();
    List<t> sortByPrice();
    List<t> sortByNumber();
    List<t> searchByCategory(int keyword);
    List<t> findPaginated(int pageNo, int pageSize);
    ProductEntity deleteByID(int id);

    ProductDto updateProduct(int id, UpdateDto productDto);
    List<ProductDto> findAll(Pageable pageable);



}
