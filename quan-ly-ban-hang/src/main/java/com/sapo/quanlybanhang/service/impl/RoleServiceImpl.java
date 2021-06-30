package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.entity.RoleEntity;
import com.sapo.quanlybanhang.repository.RoleRepository;
import com.sapo.quanlybanhang.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository releRepository;

    @Override
    public List<RoleEntity> findAll() {
        return releRepository.findAll();
    }
}
