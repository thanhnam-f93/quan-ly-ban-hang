package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.DashBoarDto;
import com.sapo.quanlybanhang.service.IDashBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashBoardController {
@Autowired
private IDashBoardService dashBoardService;
    @GetMapping("/dashboard")
    public ResponseEntity findAll(@RequestBody DashBoarDto dto){
         dto = dashBoardService.collectOrder(dto);
        return null;
    }
}
