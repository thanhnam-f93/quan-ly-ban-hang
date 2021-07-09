package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.RoleConverter;
import com.sapo.quanlybanhang.dto.RoleDto;
import com.sapo.quanlybanhang.entity.RoleEntity;
import com.sapo.quanlybanhang.repository.RoleRepository;
import com.sapo.quanlybanhang.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public List<RoleDto> findAll() {
        return roleRepository.findAll().stream().map(item-> RoleConverter.toDto(item)).collect(Collectors.toList());
    }

    @Override
    public RoleDto createRole(RoleDto roleDto) {
        RoleEntity roleEntity = RoleConverter.toEntity(roleDto);
        return RoleConverter.toDto(roleRepository.save(roleEntity));
    }

    @Override
    public RoleDto updateRole(int id, RoleDto roleDto) {
        RoleEntity roleEntity = roleRepository.findById(id).orElse(null);
        roleEntity.setName(roleDto.getName());
        roleEntity.setNotes(roleDto.getNotes());
        roleEntity.setCreatedDate(roleDto.getCreatedDate());
        roleEntity.setModifiedDate(roleDto.getModifiedDate());
        roleEntity.setCreateBy(roleDto.getCreateBy());
        roleEntity.setModifiedBy(roleDto.getModifiedBy());
        return RoleConverter.toDto(roleRepository.save(roleEntity));
    }
}
