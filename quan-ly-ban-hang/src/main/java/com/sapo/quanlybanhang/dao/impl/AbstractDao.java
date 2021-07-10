package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.dao.GenericDao;
import com.sapo.quanlybanhang.dto.OptionTime;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.BillEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.QueryHint;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.temporal.ChronoField;
import java.util.ArrayList;
import java.util.List;

public class AbstractDao<T> implements GenericDao<T> {
    public  static final Logger logger = LoggerFactory.getLogger(AbstractDao.class);
    @Autowired
    private EntityManager entityManager;
    List<LocalDate> list = new ArrayList();
    Integer totalPage = 0;
    @Override
    public Query query(OrderPageable orderPageable, String sql1, String sql2) {
        Query query = null;
        StringBuilder sql = new StringBuilder(sql1);
        System.out.println("chuỗi:"+sql1);
        if (orderPageable.getOrderTime() == null && orderPageable.getOptionTime() == null ) {
            sql.append(sql2);
            sql.append(" where (c.name like  ?1 or c.phone like ?2) or (o.code like ?3) order By o.createdDate DESC");

            query= entityManager.createQuery(sql.toString())
                    .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(3, "%" + orderPageable.getInputOrder() + "%");
//            totalPage = query.getMaxResults();
//            listOb = query.setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
//                          .setMaxResults(orderPageable.getLimit()).getResultList();

        }else if ((orderPageable.getInputOrder() == null || orderPageable.getInputOrder() == "")){
            list = getTime(orderPageable);
            sql.append("where ( DATE(o.createdDate) between Date (?1) and Date(?2)) order By o.createdDate DESC");
            query = entityManager.createQuery(sql.toString())
                    .setParameter(1, list.get(0))
                    .setParameter(2, list.get(1));
//            totalPage = query.getMaxResults();
//            listOb = query
//                    .setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
//                    .setMaxResults(orderPageable.getLimit())
//                    .getResultList();
        }else {
            list = getTime(orderPageable);
            sql.append(sql2);
            sql.append(" where (c.name like ?1 AND DATE (o.createdDate) between Date (?4) and Date(?5)) " +
                    "or (c.phone like ?2 AND DATE (o.createdDate) between Date (?4) and Date(?5))  " +
                    "or (o.code like ?3 AND DATE (o.createdDate) between Date (?4) and Date(?5)) " +
                    " order By o.createdDate DESC");
             query = entityManager.createQuery(sql.toString())
                     .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(3, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(4, list.get(0))
                     .setParameter(5, list.get(1));
//             totalPage = query.getMaxResults();
//             listOb = query
//                    .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
//                    .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
//                    .setParameter(3, "%" + orderPageable.getInputOrder() + "%")
//                    .setParameter(4, list.get(0))
//                    .setParameter(5, list.get(1))
//                    .setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
//                    .setMaxResults(orderPageable.getLimit())
//                    .getResultList();
        }
        return query;

    }

    @Override
    public List<LocalDate> getTime(OrderPageable orderPageable) {
        Integer getDay = null;
        OptionTime option = orderPageable.getOptionTime();
        LocalDate thisDay = LocalDate.now();
        List<LocalDate> list = new ArrayList();
        if(orderPageable.getOptionTime()!=null){
            switch (option){
                case TODAY:
                    list.add(thisDay);
                    list.add(thisDay);
                    logger.info("hôm nay:"+thisDay);
                    break;
                case THIS_WEEK:
                    getDay = thisDay.get(ChronoField.DAY_OF_WEEK);
                    logger.info("ngày trong tuần:"+getDay);
                    if(getDay==1){
                        list.add(thisDay);
                        list.add(thisDay);
                    }else if(getDay==7){
                        list.add(thisDay.minusDays(6));
                        list.add(thisDay);
                    }else{
                        list.add(thisDay.minusDays(getDay-1));
                        list.add(thisDay);
                    }

                    logger.info("ngày đầu tuần :"+thisDay.minusDays(getDay-1));

                    break;
                case LAST_WEEK  :
                    thisDay = thisDay.minusWeeks(1);
                    getDay = thisDay.get(ChronoField.DAY_OF_WEEK);
                    if(getDay ==1){
                        list.add(thisDay);
                        list.add(thisDay);
                    }else if(getDay==7){
                        list.add(thisDay.minusDays(6));
                        list.add(thisDay);
                    }else{
                        list.add(thisDay.minusDays(getDay-1));
                        list.add(thisDay);
                    }
                    logger.info("ngày của  tuần sau:"+getDay);
                    break;
                case YESTERDAY:
                    list.add(thisDay.minusDays(1));
                    list.add(thisDay.minusDays(1));
                    logger.info("hôm qua:"+thisDay.minusDays(1));
                    break;
                case LAST_MONTH:
                    thisDay= thisDay.minusMonths(1);
                    YearMonth month = YearMonth.from(thisDay);
                    logger.info("tháng trước :"+month+"/"+month.atDay(1)+"/"+month.atEndOfMonth());
                    list.add(month.atDay(1));
                    list.add(month.atEndOfMonth());
                    break;
                case THIS_MONTH:
                    getDay = thisDay.get(ChronoField.DAY_OF_MONTH);
                    list.add(thisDay.minusDays(getDay-1));
                    list.add(thisDay);
                    logger.info("tháng nay :"+"/"+thisDay.minusDays(getDay-1)+"-"+thisDay);
                    break;
                default:
                    break;
            }
        }else if(orderPageable.getOrderTime()!= null){
            list.add(orderPageable.getOrderTime());
            list.add(orderPageable.getOrderTime());
        }

        return list;
    }
}
