package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.entity.OrderEntity;

import java.util.List;

public interface IOrderDao {
    public List<OrderEntity> findByCodeAndCustomer(String input);
}
