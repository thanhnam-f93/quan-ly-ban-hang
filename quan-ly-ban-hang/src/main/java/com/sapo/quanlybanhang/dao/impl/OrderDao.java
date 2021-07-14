package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.converter.OrderConverter;
import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.DashBoardItem;
import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.dto.OrderListDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class OrderDao extends AbstractDao<OrderEntity> implements IOrderDao {
    public static final Logger logger = LoggerFactory.getLogger(OrderDao.class);
    @Autowired
    private EntityManager entityManager;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public OrderListDto findByCodeAndCustomer(OrderPageable orderPageable) {
        String sql1 = "SELECT o FROM OrderEntity o ";
        String sql2 = "inner join CustomerEntity c on c.id = o.customer.id";
        Query query = this.query(orderPageable, sql1, sql2);
        OrderListDto orderListDto = new OrderListDto();
        List<OrderDto> orderDtos = new ArrayList<>();
        List<OrderEntity> orderEntities = new ArrayList<>();
        if (orderPageable.getOrderTime() == null && orderPageable.getOptionTime() == null) {
            orderEntities = query.setFirstResult((orderPageable.getPage() - 1) * orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit()).getResultList();
        } else if ((orderPageable.getInputOrder() == null || orderPageable.getInputOrder() == "")) {
            orderEntities = query
                    .setFirstResult((orderPageable.getPage() - 1) * orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit())
                    .getResultList();
        } else {
            orderEntities = query
                    .setFirstResult((orderPageable.getPage() - 1) * orderPageable.getLimit())
                    .getResultList();
        }
        orderListDto.setTotalItem(query.getMaxResults());
        System.out.println(orderEntities);
        orderListDto.setResultItem(orderEntities.stream().
                map(item -> OrderConverter.toDto(item)).collect(Collectors.toList()));

        return orderListDto;

    }

    @Override
    public List<DashBoardItem> findAllByTime(LocalDate startTime, LocalDate endTime) {
        List<DashBoardItem> lists = new ArrayList();
        List<Object[]> results = this.entityManager.createQuery("select sum(o.price) as price, " +
                "o.createdDate from OrderEntity  o\n" +
                "where Date(o.createdDate) between Date(?1) and Date(?2)\n" +
                " group by Date(o.createdDate) order by o.createdDate").setParameter(1, startTime).setParameter(2, endTime)
                .getResultList();
        results.stream().forEach((item) -> {
            DashBoardItem boardItem = new DashBoardItem();
            Long price = (Long) item[0];
            logger.info("giá tiền:" + price);
            Timestamp time = (Timestamp) item[1];
            logger.info("thoi gian :" + time);
            boardItem.setPrice(price);
            boardItem.setCreatedDate(time);
            lists.add(boardItem);
        });
        return lists;
    }


}
