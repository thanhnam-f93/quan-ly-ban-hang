package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.converter.OrderConverter;
import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.sql.Date;
import java.sql.Time;
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
        String sql2 = "inner join o.customer c ";
        String sql3 = "select count(o) from OrderEntity o ";
        Long totalItem = 0L;
        List<Query> queryList = this.query(orderPageable,sql1,sql2,sql3);
        Query query = queryList.get(0);
        Query query1 = queryList.get(1);
        OrderListDto orderListDto = new OrderListDto();
        List<OrderDto> orderDtos = new ArrayList<>();
        List<OrderEntity> orderEntities = new ArrayList<>();
        orderEntities = query.setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit()).getResultList();

        System.out.println(orderEntities);
         orderListDto.setResultItem(orderEntities.stream().
                map(item-> OrderConverter.toDto(item)).collect(Collectors.toList()));
         totalItem = (Long) query1.getResultList().get(0);
         orderListDto.setTotalItem(totalItem);
         logger.info("total item:"+totalItem);
        OrderListDto list = orderListDto;
        int xx =0;
        return orderListDto;

    }

    @Override
    public List<DashBoardItem> findAllByTime(LocalDate startTime, LocalDate endTime) {
        List<DashBoardItem> lists = new ArrayList();
        List<Object[]> results = this.entityManager.createQuery("select sum(o.price) as price, " +
                "Date(o.createdDate) from OrderEntity  o\n" +
                "where Date(o.createdDate) between Date(?1) and Date(?2)\n" +
                " group by Date(o.createdDate) order by o.createdDate").setParameter(1, startTime).setParameter(2, endTime)
                .getResultList();
        results.stream().forEach((item) -> {
            DashBoardItem boardItem = new DashBoardItem();
            Long price = (Long) item[0];
            logger.info("giá tiền:"+price);
            Date time = (Date) item[1];
            logger.info("thoi gian :"+time);
            boardItem.setPrice(price);
            boardItem.setCreatedDate(time);
            lists.add(boardItem);

        });
        return lists;
    }

    @Override
    public List<OrderResultSet> reportByMonth(ReportOffsetTime offsetTime) {
        List<ReportDto> reportDtoList = new ArrayList();
        String sql = "select new com.sapo.quanlybanhang.dto.OrderResultSet(MONTH(o.createdDate)," +
                "YEAR(o.createdDate), sum(o.price),sum(o.discount), count(od.quanlity),count (o)) " +
                "from OrderEntity o inner join o.orderDetailEntities od " +
                "where Date(o.createdDate) between Date(?1) and Date(?2) " +
                "group by MONTH(o.createdDate),YEAR(o.createdDate) ";
        List<OrderResultSet> list = entityManager.createQuery(sql)
                .setParameter(1, offsetTime.getStartedTime())
                .setParameter(2, offsetTime.getEndedTime())
                .getResultList();
        return list;
    }

    @Override
    public List<OrderResultSet> reportByOrder(ReportOffsetTime offsetTime) {
        String sql = "select  new com.sapo.quanlybanhang.dto.OrderResultSet( o.code ,sum(o.price)," +
                "sum(o.discount), count(od.quanlity), count(ro), sum(ro.price) ,sum(rod.quanlity))\n" +
                " from OrderDetailEntity od \n" +
                "  left JOIN  od.order o \n" +
                "   left JOIN  o.billEntities ro\n" +
                " left join ro.billDetailEntities rod\n" +
                " where DATE(o.createdDate) between Date(?1) and Date(?2)\n" +
                "  group by o.code ";
        List<OrderResultSet> list = entityManager.createQuery(sql)
                .setParameter(1,offsetTime.getStartedTime())
                .setParameter(2, offsetTime.getEndedTime())
                .getResultList();
            return list;
    }


}
