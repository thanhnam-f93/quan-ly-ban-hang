package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderDetailController {
    @Autowired
    private IOrderDetailService orderDetailService;
    @GetMapping("/orderDetails")
    public ResponseEntity findAll(@RequestParam(name = "order") Integer id){
        List<OrderDetailDto> list = orderDetailService.findAllByOrderId(id);
        if(list.size()==0){
             return ResponseEntity.status(HttpStatus.FORBIDDEN).body("do not have result");
        }
        return ResponseEntity.ok(list);
    }
}
