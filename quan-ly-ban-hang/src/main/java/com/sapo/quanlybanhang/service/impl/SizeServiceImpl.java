package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.Converter;
import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.ProductEntity;
import com.sapo.quanlybanhang.entity.SizeEntity;
import com.sapo.quanlybanhang.entity.SupplierEntity;
import com.sapo.quanlybanhang.repository.SizeRepository;
import com.sapo.quanlybanhang.service.SizeService;
import com.sapo.quanlybanhang.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class SizeServiceImpl implements SizeService {
@Autowired
private SizeRepository sizeRepository;
    @Override
    public List<SizeDto> getAll() {
        List<SizeEntity> sizeEntities = sizeRepository.findAll();
        List<SizeDto> sizeDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (SizeEntity item : sizeEntities) {
            sizeDtos.add(converter.ConverterToDtoSize(item));
        }
        return sizeDtos;
    }
}
