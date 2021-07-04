package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.OrderPageable;

import java.time.LocalDate;
import java.util.List;

public interface GenericDao<T> {
     <T>List <T> query( OrderPageable orderPageable,  String sql1, String sql2);
     List<LocalDate> getTime(OrderPageable orderPageable);
}
