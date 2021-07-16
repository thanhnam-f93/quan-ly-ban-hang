package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.BrandDto;
import com.sapo.quanlybanhang.dto.SupplierDto;

import java.util.List;

public interface BrandService <t>{
    List<t> getAll();
    BrandDto create(BrandDto brandDto);
}
