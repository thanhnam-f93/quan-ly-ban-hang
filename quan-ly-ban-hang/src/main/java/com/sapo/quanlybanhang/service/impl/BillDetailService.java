package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.BillDetailConverter;
import com.sapo.quanlybanhang.dto.BillDetailDto;
import com.sapo.quanlybanhang.repository.BillDetailRepository;
import com.sapo.quanlybanhang.service.IBillDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BillDetailService implements IBillDetailService {
    @Autowired
    private BillDetailRepository billDetailRepository;
    @Override
    public List<BillDetailDto> findAllOrder(Integer id) {
        return billDetailRepository.findAllByBillId(id)
                .stream().map(item -> BillDetailConverter.toDto(item)).collect(Collectors.toList());
    }
}
