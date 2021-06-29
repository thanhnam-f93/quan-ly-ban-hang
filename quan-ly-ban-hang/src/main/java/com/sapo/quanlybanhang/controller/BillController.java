package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.BillDto;
import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.dto.OrderResponse;
import com.sapo.quanlybanhang.service.IBillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillController {
    @Autowired
    private IBillService billService;

    @PostMapping("/bills")
    public ResponseEntity save (@RequestBody BillDto  billDto){
        List<OrderDetailDto> orderDetailDtos = billDto.getOrderDetailDtos();
        if (orderDetailDtos.size()== 0){
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(new OrderResponse(" sản phẩm không hợp lệ hoặc quá thời hạn bảo hành"));
        }
        if((billDto= billService.save(billDto))!= null){
            return ResponseEntity.ok(billDto);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(new OrderResponse("sản phẩm không hợp lệ hoặc quá thời hạn bảo hành"));

    }

}
