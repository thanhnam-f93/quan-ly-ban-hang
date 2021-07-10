package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.DashBoardItem;
import com.sapo.quanlybanhang.dto.OrderListDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.OrderEntity;
import java.time.LocalDate;
import java.util.List;

public interface IOrderDao extends GenericDao<OrderEntity> {
    public OrderListDto findByCodeAndCustomer(OrderPageable orderPageable);
    public List<DashBoardItem> findAllByTime(LocalDate startTime, LocalDate endTime);
}
