package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.ColorDto;
import com.sapo.quanlybanhang.service.SizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "api/v1")
public class SizeController {

    @Autowired
    private SizeService sizeService;

    @GetMapping(value = "/Size")
    public List<ColorDto> getAll(){
        return sizeService.getAll();
    }
}
