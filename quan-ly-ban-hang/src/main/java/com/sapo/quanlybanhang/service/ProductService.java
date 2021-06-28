package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.InputProductDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.entity.ProductEntity;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductService <t>{
    List<t> getAll();
    ProductDto create(InputProductDto inputProductDTO);
    ProductDto findById(int id);
    ProductEntity update(int id, ProductEntity productEntity);
    List<t> findAll(String keyword);
    List<t> sortByName();
    List<t> sortByPrice();
    List<t> sortByNumber();
    List<t> searchByCategory(int keyword);
    List<t> findPaginated(int papeNo, int papeSize);
    ProductEntity deleteByID(int id);


}
