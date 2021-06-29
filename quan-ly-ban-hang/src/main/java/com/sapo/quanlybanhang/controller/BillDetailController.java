package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.BillDetailDto;
import com.sapo.quanlybanhang.service.IBillDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillDetailController {
    @Autowired
    private IBillDetailService billDetailService;
    @GetMapping("/bill-details")
    public ResponseEntity findAll(@RequestParam(name = "bill") Integer id){
        List<BillDetailDto> list = billDetailService.findAllOrder(id);
        if(list.size()== 0){
            ResponseEntity.status(HttpStatus.FORBIDDEN).body("do not have result");
        }
        return ResponseEntity.ok(list);

    }
}