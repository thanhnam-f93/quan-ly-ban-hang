package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.entity.OrderEntity;

import java.util.stream.Collectors;

public class OrderConverter {
    public static OrderEntity toEntity(OrderDto dto){
        OrderEntity entity = new OrderEntity();
        entity.setCode(dto.getCode());
        entity.setId(dto.getId());
        entity.setModifiedBy(dto.getModifiedBy());
        entity.setModifiedDate(dto.getModifiedDate());
        entity.setCreateBy(dto.getCreateBy());
        entity.setCreatedDate(dto.getCreatedDate());
        entity.setPrice(dto.getPrice());
        return entity;
    }

    public  static OrderDto toDto(OrderEntity entity){
        OrderDto dto = new OrderDto();
        dto.setCode(entity.getCode());
        dto.setId(entity.getId());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());
        dto.setCreateBy(entity.getCreateBy());
        dto.setCreatedDate(entity.getCreatedDate());
        dto.setPrice(entity.getPrice());
        dto.setStaffId(entity.getStaff().getId());
        dto.setCustomId(entity.getCustomer().getId());
        dto.setCustomerName(entity.getCustomer().getName());
        dto.setStaffName(entity.getStaff().getFullName());
        dto.setCustomerEmail(entity.getCustomer().getEmail());
        dto.setCustomerPhone(entity.getCustomer().getPhone());
//        dto.setOrderDetailDtos(entity.getOrderDetailEntities().stream()
//                .map(item ->OrderDetailConverter.toDto(item)).collect(Collectors.toList()));
        return dto;
    }
}
