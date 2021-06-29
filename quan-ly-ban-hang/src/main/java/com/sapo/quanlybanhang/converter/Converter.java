package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.CategoryDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.entity.CategoryEntity;
import com.sapo.quanlybanhang.entity.ProductEntity;

import java.util.ArrayList;
import java.util.List;

public class Converter {
    public ProductDto ConverterToDtoProduct(ProductEntity item) {
        ProductDto dto = new ProductDto();
        dto.setId(item.getId());
        dto.setCode(item.getCode());
        dto.setName(item.getName());
        dto.setNumberProduct(item.getNumberProduct());
        dto.setSellProduct(item.getSellProduct());
        dto.setPrice(item.getPrice());
        dto.setDescription(item.getDescription());
        dto.setCreatedDate(item.getCreatedDate());
        dto.setModifiedDate(item.getModifiedDate());
        dto.setCreateBy(item.getCreatedBy());
        dto.setModifiedBy(item.getModifiedBy());
        dto.setSizeId(item.getSize().getSize());
        dto.setCategoryId(item.getCategory().getName());
        dto.setSupplierId(item.getSupplier().getName());
        dto.setColorId(item.getColor().getName());
        dto.setBrandID(item.getBrand().getName());
        return dto;

    }
    public CategoryDto ConverterToDtoCategory(CategoryEntity item) {
        CategoryDto dto = new CategoryDto();
        dto.setId(item.getId());
        dto.setCode(item.getCode());
        dto.setName(item.getName());
        dto.setCreatedDate(item.getCreatedDate());
        dto.setModifiedDate(item.getModifiedDate());
        dto.setCreate_by(item.getCreate_by());
        dto.setModified_by(item.getModified_by());
        List<ProductDto> productDtoList = new ArrayList<>();
        for ( ProductEntity productEntity: item.getProductEntities())
        {
            ProductDto productDto = ConverterToDtoProduct(productEntity);
            productDtoList.add(productDto);

        }
        dto.setProductDtoList(productDtoList);

        return dto;

    }
}
