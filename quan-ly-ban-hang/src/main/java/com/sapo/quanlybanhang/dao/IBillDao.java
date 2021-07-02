package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.BillEntity;
import com.sapo.quanlybanhang.entity.OrderEntity;

import java.util.List;

public interface IBillDao extends GenericDao<BillEntity> {
    public List<BillEntity> findByCodeAndCustomer(OrderPageable orderPageable);
}
