package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.Converter;
import com.sapo.quanlybanhang.dto.ColorDto;
import com.sapo.quanlybanhang.entity.ColorEntity;
import com.sapo.quanlybanhang.repository.ColorRepository;
import com.sapo.quanlybanhang.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ColorServiceImpl implements ColorService {
    @Autowired
    private ColorRepository colorRepository;
    @Override
    public List<ColorDto> getAll() {
        List<ColorEntity> colorEntities = colorRepository.findAll();
        List<ColorDto> colorDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (ColorEntity item : colorEntities) {
            colorDtos.add(converter.ConverterToDtoColor(item));
        }
        return colorDtos;
    }
}
