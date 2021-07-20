package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.BillDetailDto;

import java.util.List;

public interface IBillDetailService {
    public List<BillDetailDto> findAllOrder(Integer id);
}
