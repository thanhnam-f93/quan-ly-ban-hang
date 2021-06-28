package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import java.util.List;

@Component
public class OrderDao implements IOrderDao {
    @Autowired
    private EntityManager entityManager;
    public static final String FINDBY_CODE_CUSTOMER = "SELECT o FROM OrderEntity o inner join " +
            "CustomerEntity c on c.id = o.customer.id\n" +
            " where (c.name like ?1 or c.phone like ?2) or (o.code like ?3)\n";
    @Override
    public List<OrderEntity> findByCodeAndCustomer(String input) {

        return entityManager.createQuery(FINDBY_CODE_CUSTOMER)
                .setParameter(1,"%"+input+"%")
                .setParameter(2,"%"+input+"%")
                .setParameter(3,"%"+input+"%").getResultList();
    }
}
