package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.dao.IBillDao;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.BillEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BillDao extends AbstractDao<BillEntity> implements IBillDao {

    @Override
    public List<BillEntity> findByCodeAndCustomer(OrderPageable orderPageable) {
        String sql1 = "select o FROM BillEntity o ";
        String sql2 = "inner join CustomerEntity c on c.id = o.customerBill.id";
        return this.query(orderPageable,sql1,sql2);
    }
}
