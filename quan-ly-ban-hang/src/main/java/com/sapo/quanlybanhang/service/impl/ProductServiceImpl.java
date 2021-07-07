package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.Converter;
import com.sapo.quanlybanhang.converter.ProductConverter;
import com.sapo.quanlybanhang.dto.InputProductDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.dto.UpdateDto;
import com.sapo.quanlybanhang.entity.*;
import com.sapo.quanlybanhang.repository.*;
import com.sapo.quanlybanhang.service.ProductService;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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
        List<ProductEntity> productEntities = productRepository.findAllByStateIsNull();
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

    @Override
    public List getAllByDay() {
        List<ProductEntity> productEntities = productRepository.getALLByDay();
        List<ProductDto> productDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (ProductEntity item : productEntities) {
            productDtos.add(converter.ConverterToDtoProduct(item));
        }
        return productDtos;
    }

    @Override
    public List getAllByMonth() {
        List<ProductEntity> productEntities = productRepository.getALLByMonth();
        List<ProductDto> productDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (ProductEntity item : productEntities) {
            productDtos.add(converter.ConverterToDtoProduct(item));
        }
        return productDtos;
    }

    @Override
    public List sortByName() {
        List<ProductEntity> productEntities = productRepository.sortByName();
        List<ProductDto> productDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (ProductEntity item : productEntities) {
            productDtos.add(converter.ConverterToDtoProduct(item));
        }
        return productDtos;
    }

    @Override
    public List sortByPrice() {
        List<ProductEntity> productEntities = productRepository.findAllByIdIsNotNullOrderByPriceDesc();
        List<ProductDto> productDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (ProductEntity item : productEntities) {
            productDtos.add(converter.ConverterToDtoProduct(item));
        }
        return productDtos;
    }

    @Override
    public List sortByNumber() {
        List<ProductEntity> productEntities = productRepository.sortByNumber();
        List<ProductDto> productDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (ProductEntity item : productEntities) {
            productDtos.add(converter.ConverterToDtoProduct(item));
        }
        return productDtos;
    }

    @Override
    public List<ProductDto> searchByCategory(int keyword) {
        if (keyword != 0) {
            List<ProductEntity> productEntities = productRepository.findByCategory_Id(keyword);
            List<ProductDto> productDtos = new ArrayList<>();
            Converter converter = new Converter();
            for (ProductEntity item : productEntities) {
                productDtos.add(converter.ConverterToDtoProduct(item));
            }
            return productDtos;
        }
        return null;
    }

    @Override
    public List findPaginated(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
        Page<ProductEntity> productEntities = productRepository.findAll(pageable);
        List<ProductDto> productDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (ProductEntity item : productEntities) {
            productDtos.add(converter.ConverterToDtoProduct(item));
        }
        return productDtos;
    }

    @Override
    public ProductEntity deleteByID(int id) {
        ProductEntity productEntity = productRepository.findByIdAndStateIsNotNull(id);
        if (productEntity != null) {
            productEntity.setState("Deleted");
            productRepository.save(productEntity);
        }
        return null;
    }

    @Override
    public ProductDto updateProduct(int id, UpdateDto updateDto) {
        ProductEntity product = productRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found."));
        CategoryEntity categoryEntity = categoryRepository.getById(updateDto.getCategory_id());
        BrandEntity brandEntity = brandRepository.getById((updateDto.getBrand_id()));
        ColorEntity colorEntity = colorRepository.getById(updateDto.getColor_id());
        SizeEntity sizeEntity = sizeRepository.getById(updateDto.getSize_id());
        SupplierEntity supplierEntity = supplierRepository.getById(updateDto.getSupplier_id());
        product.setCode(updateDto.getCode());
        product.setName(updateDto.getName());
        product.setCategory(categoryEntity);

        product.setBrand(brandEntity);

        product.setColor(colorEntity);

        product.setSize(sizeEntity);

        product.setSupplier(supplierEntity);

        productRepository.save(product);
        Converter converter = new Converter();
        return converter.ConverterToDtoProduct(product);


    }

    @Override
    public List<ProductDto> findAll(Pageable pageable) {
        return productRepository.
                findAll(pageable).getContent().stream()
                .map(item ->ProductConverter.toDto(item)).collect(Collectors.toList());
    }
}

