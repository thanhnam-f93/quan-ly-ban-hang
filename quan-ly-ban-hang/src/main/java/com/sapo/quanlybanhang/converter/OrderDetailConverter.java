package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.entity.OrderDetailEntity;

public class OrderDetailConverter {
    public static OrderDetailDto toDto (OrderDetailEntity entity){
        OrderDetailDto dto = new OrderDetailDto();
        dto.setId(entity.getId());
        dto.setCode(entity.getCode());
        dto.setDiscount(entity.getDiscount());
        dto.setQuanlity(entity.getQuanlity());
        dto.setCodeOrder(entity.getProduct().getCode());
        dto.setCodeProduct(entity.getProduct().getCode());
        return  dto;
    }

    public static OrderDetailEntity toEntity (OrderDetailDto dto){
        OrderDetailEntity entity = new OrderDetailEntity();
        entity.setId(dto.getId());
        entity.setCode(dto.getCode());
        entity.setDiscount(dto.getDiscount());
        entity.setQuanlity(dto.getQuanlity());
        return  entity;
    }
}