package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrderService {
    public List<OrderDto> findAll( Pageable pageable);
    public OrderDto save (OrderDto orderDto);
    List<OrderDto> findByCodeAndCustomer(String input);
}
