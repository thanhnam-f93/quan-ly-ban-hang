package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.data.domain.Pageable;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

public interface IOrderService {
    public List<OrderDto> findAll( Pageable pageable);
    public OrderDto save (OrderDto orderDto);
    List<OrderDto> findByCodeAndCustomer(OrderPageable orderPageable);
    public List<Long> findPrice(LocalDate optionTime);
}
