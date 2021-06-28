package com.sapo.quanlybanhang.service.impl.impl;

import com.sapo.quanlybanhang.dto.InputProductDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.entity.*;
import com.sapo.quanlybanhang.repository.*;
import com.sapo.quanlybanhang.service.ProductService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public List<ProductDto> getAll() {
        List<ProductEntity> productEntities = productRepository.findAll();
        List<ProductDto> productDtos = new ArrayList<>();
        for(ProductEntity item:productEntities){
            productDtos.add(ConverterToDto(item));


        }

        return productDtos;
    }

    @Override
    public ProductDto create(InputProductDto inputProductDTO) {
        CategoryEntity categoriesEntity = categoryRepository.getById(inputProductDTO.getCategory_id());
        BrandEntity brandEntity = brandRepository.getById(inputProductDTO.getBrand_id());
        ColorEntity colorEntity = colorRepository.getById(inputProductDTO.getColor_id());
        SizeEntity sizeEntity = sizeRepository.getById(inputProductDTO.getSize_id());
        SupplierEntity supplierEntity = supplierRepository.getById(inputProductDTO.getSupplier_id());
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT);
        ProductEntity productEntity = modelMapper.map(inputProductDTO , ProductEntity.class);
        productEntity.setCategory(categoriesEntity);
        productEntity.setBrand(brandEntity);
        productEntity.setColor(colorEntity);
        productEntity.setSize(sizeEntity);
        productEntity.setSupplier(supplierEntity);
        productRepository.save(productEntity);
        ProductDto productsDTO = ConverterToDto(productEntity);

        return  productsDTO;
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

    private ProductDto ConverterToDto(ProductEntity item){
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
}
