package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.*;


import com.sapo.quanlybanhang.service.IOrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {
    @Autowired
    private IOrderService orderService;
/**
    paging of order . sort descending
 */
    @GetMapping("/orders")
    public List<OrderDto> findAll(@RequestBody OrderPageable orderPageable){
        Sort sort = Sort.by(orderPageable.getSortBy()).descending();
        Pageable pageable = PageRequest.of(orderPageable.getPage()-1,orderPageable.getLimit(),sort);
       return  orderService.findAll(pageable);
    }

    /**
     * create bill
     * @param orderDto
     * @return
     */
    @PostMapping("/orders")
    public ResponseEntity save (@RequestBody OrderDto orderDto){
        List<OrderDetailDto> orderDetailDtos = orderDto.getOrderDetailDtos();
        if(orderDetailDtos.size()==0){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new OrderResponse("message","không có sản phẩm"));
        }

        if((orderDto=orderService.save(orderDto)) != null){
            return ResponseEntity.ok(orderDto);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(new OrderResponse("message","không có sản phẩm"));
    }

    /**
     * search order by code, customer 's name and customer 's phone number
     * @param input
     * @return
     */
    @GetMapping("/orders/search-order/{input}")
    public  ResponseEntity findByCodeAndCustomer(@PathVariable String input){
        return ResponseEntity.ok(orderService.findByCodeAndCustomer(input));
    }

    @GetMapping ("/orders/filter-orders")
    public ResponseEntity filterOrder(@RequestBody FilterOrder filterOrder){

        return  null;
    }

}
