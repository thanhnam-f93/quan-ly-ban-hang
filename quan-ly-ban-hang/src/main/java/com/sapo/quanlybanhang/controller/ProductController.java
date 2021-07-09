package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.ProductEntity;
import com.sapo.quanlybanhang.service.ProductService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "api/v1")
public class ProductController {
    @Autowired
    private ProductService productService;


    @GetMapping(value = "/products")
    public List<ProductDto> getAll() {
        return productService.getAll();
    }

    @GetMapping(value = "/day")
    public List<ProductDto> filterByDay() {
        return productService.getAllByDay();
    }
    @GetMapping(value = "/month")

    public List<ProductDto> filterByMonth() {
        return productService.getAllByMonth();
    }

    @GetMapping(value = "/products/name")
    public List<ProductDto> sortByName() {
        return productService.sortByName();
    }

    @GetMapping(value = "/products/price")
    public List<ProductDto> sortByPrice() {
        return productService.sortByPrice();
    }

    @GetMapping(value = "/products/number")
    public List<ProductDto> sortByNumber() {
        return productService.sortByNumber();
    }

    @PostMapping(value = "/products")
    public InputProductDto create(@RequestBody InputProductDto productDto) {
        productService.create(productDto);
        return productDto;

    }

    @GetMapping(value = "/products/{id}")
    public ProductDto getById(@PathVariable int id) {

        return productService.findById(id);
    }

//    @PutMapping(value = "/products/{id}")
//    public ResponseEntity<ProductDto> updateProduct(@PathVariable int id, @RequestBody ProductDto productDto) {
//        ModelMapper modelMapper = new ModelMapper();
//        modelMapper.getConfiguration()
//                .setMatchingStrategy(MatchingStrategies.STRICT);
//
//        ProductEntity productRequest = modelMapper.map(productDto, ProductEntity.class);
//
//        // convert DTO to Entity
//        ProductEntity product = productService.update(id, productRequest);
//        // entity to DTO
//        ProductDto productResponse = modelMapper.map(product, ProductDto.class);
//        return ResponseEntity.ok().body(productResponse);
//
//    }

    @GetMapping(value = "/productSearch")
    public List<ProductDto> search(@RequestParam String keyword,@RequestParam int pageNo,@RequestParam int pageSize) {
       if( keyword ==""){
           return productService.findPaginated(pageNo, pageSize);
       }
       else{
           return productService.searchByNameAndCode(keyword,pageNo,pageSize);
       }
    }
    @GetMapping(value = "/productSearchByKey")
    public List<ProductDto> searchAll(@RequestParam String keyword) {
        if( keyword == ""){
            return productService.getAll();
        }
        else {
            return productService.searchByKey(keyword);
        }
    }

//    @GetMapping(value = "/productss")
//    public List<ProductDto> searchByName(@RequestParam String keyword) {
//
//        return productService.searchAllName(keyword);
//    }

    @GetMapping(value = "/product_searchByCategory/{keyword}")
    public List<ProductDto> filterByCategory(@PathVariable int keyword)
    {
        return productService.searchByCategory(keyword);
    }
    @GetMapping(value = "/productsearchByCategory")
    public List<ProductDto> filterByCategory(@RequestParam String keyword)
    {
        return productService.searchByCate(keyword);
    }

    @GetMapping(value = "/product_searchByCategories")
    public List<ProductDto> searchCatePagination(@RequestParam String keyword,@RequestParam int pageNo,@RequestParam int pageSize)
    {

        return productService.searchByCatePagination(keyword,pageNo,pageSize);
    }
    @GetMapping(value = "/productsearchByCategories")
    public List<ProductDto> filterByCategory(@RequestParam int keyword,@RequestParam int pageNo,@RequestParam int pageSize)
    {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
        return productService.searchByCategories(keyword,pageable);
    }

    @GetMapping(value = "/product")
    public List<ProductDto> findPaginated(@RequestParam int pageNo,@RequestParam int pageSize) {
        return productService.findPaginated(pageNo, pageSize);


    }

    @DeleteMapping(value = "/products/{id}")
    public void deleteProductById(@PathVariable int id) {
        productService.deleteByID(id);
    }

    @PutMapping(value = "/products/{id}")
    public ResponseEntity<UpdateDto> updateProduct(@PathVariable int id, @RequestBody UpdateDto updateDto) {

        productService.updateProduct(id, updateDto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping ("/find-all")
    public List<ProductDto> findAll(@RequestBody OrderPageable orderPageable){

            Sort sort = Sort.by("createdDate").descending();
            Pageable pageable = PageRequest.of(orderPageable.getPage()-1,orderPageable.getLimit(),sort);
            return  productService.findAll(pageable);
        }

}
