package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.converter.BillConverter;
import com.sapo.quanlybanhang.dao.IBillDao;
import com.sapo.quanlybanhang.dto.BillDto;
import com.sapo.quanlybanhang.dto.BillListDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.BillEntity;
import org.springframework.stereotype.Component;

import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class BillDao extends AbstractDao<BillEntity> implements IBillDao {

    @Override
    public BillListDto findByCodeAndCustomer(OrderPageable orderPageable) {
        List<BillDto> billDtos = new ArrayList<>();
        BillListDto listDto = new BillListDto();
        List<BillEntity> billEntities = new ArrayList<>();
        String sql1 = "select o  FROM BillEntity o ";
        String sql2 = "inner join o.customerBill c ";
        String sql3 = "select count(o)  FROM BillEntity o ";
        List<Query> listQuery = this.query(orderPageable,sql1,sql2,sql3);
        Query query = listQuery.get(0);
        Query queryCount = listQuery.get(1);
            billEntities = query.setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit()).getResultList();
            Long a =(Long) queryCount.getResultList().get(0);
            listDto.setTotalItem(a);
            listDto.setResultList(billEntities.stream()
                                    .map(item-> BillConverter.toDto(item)).collect(Collectors.toList()));
            return listDto;

        }
}
