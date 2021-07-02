package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.dao.GenericDao;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.BillEntity;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import java.util.List;

public class AbstractDao<T> implements GenericDao<T> {
    @Autowired
    private EntityManager entityManager;
    @Override
    public <T> List<T> query( OrderPageable orderPageable, String sql1, String sql2) {

        StringBuilder sql = new StringBuilder(sql1);
        System.out.println("chuỗi:"+sql1);
        if (orderPageable.getOrderTime() == null ) {
            sql.append(sql2);
            sql.append(" where (c.name like ?1 or c.phone like ?2) or (o.code like ?3) order By o.createdDate DESC");

            return entityManager.createQuery(sql.toString())
                    .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(3, "%" + orderPageable.getInputOrder() + "%")
                    .setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit())
                    .getResultList();

        }else if (orderPageable.getInputOrder() == null || orderPageable.getInputOrder() == ""){
            sql.append("where DATE(o.createdDate) = Date (?1)");
            return entityManager.createQuery(sql.toString())
                    .setParameter(1, orderPageable.getOrderTime())
                    .setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit())
                    .getResultList();
        }else {
            sql.append(sql2);
            sql.append(" where (c.name like ?1 AND DATE (o.createdDate) = Date (?4)) " +
                    "or (c.phone like ?2 AND DATE (o.createdDate) = Date (?4)) " +
                    "or (o.code like ?3 AND DATE (o.createdDate) = Date (?4)) " +
                    " order By o.createdDate DESC");
            return entityManager.createQuery(sql.toString())
                    .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(3, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(4, orderPageable.getOrderTime() )
                    .setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit())
                    .getResultList();
        }

    }
}
