package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.OrderDto;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrderService {
    public List<OrderDto> findAll(String status, Pageable pageable);
    public OrderDto save (OrderDto orderDto);
}
