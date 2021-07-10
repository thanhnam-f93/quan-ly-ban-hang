package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.BillListDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.BillEntity;

public interface IBillDao extends GenericDao<BillEntity> {
    public BillListDto findByCodeAndCustomer(OrderPageable orderPageable);
}
