package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.OrderPageable;

import javax.persistence.Query;
import java.time.LocalDate;
import java.util.List;

public interface GenericDao<T> {
     Query query(OrderPageable orderPageable, String sql1, String sql2);
     List<LocalDate> getTime(OrderPageable orderPageable);
}
