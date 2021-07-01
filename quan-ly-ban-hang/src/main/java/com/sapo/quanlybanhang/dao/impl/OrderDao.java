package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.DashBoardItem;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import javax.persistence.EntityManager;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class OrderDao implements IOrderDao {
    public static final Logger logger = LoggerFactory.getLogger(OrderDao.class);
    @Autowired
    private EntityManager entityManager;
    @Autowired
    private JdbcTemplate jdbcTemplate;
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

    @Override
    public List<DashBoardItem> findAllByTime(LocalDate startTime, LocalDate endTime) {
        List<DashBoardItem> lists = new ArrayList();
        List<Object[]> results = this.entityManager.createQuery("select sum(o.price) as price, " +
                "o.createdDate from OrderEntity  o\n" +
                "where Date(created_date) between Date(?1) and Date(?2)\n" +
                " group by Date(o.createdDate)").setParameter(1,startTime).setParameter(2,endTime)
                .getResultList();
        results.stream().forEach((item) ->{
            DashBoardItem boardItem = new DashBoardItem();
            Long price = (Long) item[0];
            logger.info("giá tiền:"+price);
            Timestamp time = (Timestamp) item[1];
            logger.info("thoi gian :"+time);
            boardItem.setPrice(price);
            boardItem.setCreatedDate(time);
            lists.add(boardItem);
        });
        return lists;
    }


}
