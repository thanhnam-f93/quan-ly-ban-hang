package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import java.sql.Timestamp;
import java.util.List;

@Component
public class OrderDao implements IOrderDao {
    @Autowired
    private EntityManager entityManager;
    @Override
    public List<OrderEntity> findByCodeAndCustomer(OrderPageable orderPageable) {
        StringBuilder sql = new StringBuilder("SELECT o FROM OrderEntity o ");
        if (orderPageable.getOrderTime() == null ) {
            sql.append("inner join CustomerEntity c on c.id = o.customer.id");
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
            sql.append("inner join CustomerEntity c on c.id = o.customer.id");
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
