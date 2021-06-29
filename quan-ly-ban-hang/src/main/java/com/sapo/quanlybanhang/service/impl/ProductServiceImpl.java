package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.Converter;
import com.sapo.quanlybanhang.dto.InputProductDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.entity.*;
import com.sapo.quanlybanhang.repository.*;
import com.sapo.quanlybanhang.service.ProductService;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ColorRepository colorRepository;
    @Autowired
    private SizeRepository sizeRepository;
    @Autowired
    private SupplierRepository supplierRepository;


    @Override
    public List getAll() {
        List<ProductEntity> productEntities = productRepository.findAll();
        List<ProductDto> productDtos = new ArrayList<>();
        Converter converter = new Converter();

        for (ProductEntity item : productEntities) {
            productDtos.add(converter.ConverterToDtoProduct(item));

        }

        return productDtos;
    }

    @Override
    public ProductDto create(InputProductDto inputProductDTO) {
        Converter converter = new Converter();
        CategoryEntity categoriesEntity = categoryRepository.getById(inputProductDTO.getCategory_id());
        BrandEntity brandEntity = brandRepository.getById(inputProductDTO.getBrand_id());
        ColorEntity colorEntity = colorRepository.getById(inputProductDTO.getColor_id());
        SizeEntity sizeEntity = sizeRepository.getById(inputProductDTO.getSize_id());
        SupplierEntity supplierEntity = supplierRepository.getById(inputProductDTO.getSupplier_id());
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT);

        ProductEntity productEntity = modelMapper.map(inputProductDTO, ProductEntity.class);
        productEntity.setCategory(categoriesEntity);
        productEntity.setBrand(brandEntity);
        productEntity.setColor(colorEntity);
        productEntity.setSize(sizeEntity);
        productEntity.setSupplier(supplierEntity);
        productRepository.save(productEntity);
        ProductDto productsDTO = converter.ConverterToDtoProduct(productEntity);

        return productsDTO;
    }

    @Override
    public ProductDto findById(int id) {
        ProductEntity productEntity = productRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found."));
        ProductDto productDto = new ProductDto();
        productDto.setId(productEntity.getId());
        productDto.setCode(productEntity.getCode());
        productDto.setName(productEntity.getName());
        productDto.setBrandID(productEntity.getBrand().getName());
        productDto.setNumberProduct(productEntity.getNumberProduct());
        productDto.setSellProduct(productEntity.getSellProduct());
        productDto.setImage(productEntity.getImage());
        productDto.setPrice(productEntity.getPrice());
        productDto.setSupplierId(productEntity.getSupplier().getName());
        productDto.setDescription(productEntity.getDescription());
        productDto.setColorId(productEntity.getColor().getName());
        productDto.setCreatedDate(productEntity.getCreatedDate());
        productDto.setModifiedDate(productEntity.getModifiedDate());
        productDto.setSizeId(productEntity.getSize().getSize());
        productDto.setCategoryId(productEntity.getCategory().getName());
        productDto.setCreateBy(productEntity.getCreatedBy());
        productDto.setModifiedBy(productEntity.getModifiedBy());

        return productDto;
    }

    @Override
    public ProductEntity update(int id, ProductEntity productEntity) {
        ProductEntity product = productRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found."));

        product.setCode(productEntity.getCode());
        product.setName(productEntity.getName());

        return productRepository.save(product);
    }

    @Override
    public List findAll(String keyword) {
        if (keyword != null) {
            List<ProductEntity> productEntities = productRepository.findAll(keyword);
            List<ProductDto> productDtos = new ArrayList<>();
            Converter converter = new Converter();
            for (ProductEntity item : productEntities) {
                productDtos.add(converter.ConverterToDtoProduct(item));
            }
            return productDtos;
        }
        return null;
    }
}