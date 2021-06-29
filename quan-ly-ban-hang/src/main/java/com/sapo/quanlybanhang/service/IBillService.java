package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.BillDto;
import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.entity.OrderDetailEntity;
import com.sapo.quanlybanhang.entity.OrderEntity;

public interface IBillService {
    public BillDto save(BillDto billDto);
    public Long checkPrice (OrderDetailDto dto, OrderDetailEntity entity, OrderEntity orderEntity);
}
