package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.OrderEntity;

import java.sql.Timestamp;
import java.util.List;

public interface IOrderDao {
    public List<OrderEntity> findByCodeAndCustomer(OrderPageable orderPageable);
}
