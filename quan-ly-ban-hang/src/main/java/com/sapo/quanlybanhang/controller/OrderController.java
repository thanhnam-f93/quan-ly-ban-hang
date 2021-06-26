package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.dto.OrderResponse;

import com.sapo.quanlybanhang.service.IOrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
       return  orderService.findAll(orderPageable.getStatus(),pageable);
    }

    @PostMapping("/orders")
    public ResponseEntity save (@RequestBody OrderDto orderDto){
        return  null;
//        List<OrderDetailDto> orderDetailDtos = orderDto.getOrderDetailDtos();
//        if(orderDetailDtos.size()==0){
//            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new OrderResponse("message","không có sản phẩm"));
//        }
//        if(orderService.save(orderDto) != null){
//            return ResponseEntity.ok(orderDto);
//        }
//        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(new OrderResponse("message","không có sản phẩm"));
    }
}
