package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.OrderPageable;

import java.util.List;

public interface GenericDao<T> {
     <T>List <T> query( OrderPageable orderPageable,  String sql1, String sql2);
}
