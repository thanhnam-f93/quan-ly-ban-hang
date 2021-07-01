package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.StaffConverter;
import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.entity.RoleEntity;
import com.sapo.quanlybanhang.entity.StaffEntity;
import com.sapo.quanlybanhang.repository.RoleRepository;
import com.sapo.quanlybanhang.repository.StaffRepository;
import com.sapo.quanlybanhang.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StaffServiceImpl implements StaffService {

//    @Autowired
//    private StaffRepository staffRepository;
    @Autowired
    private RoleRepository roleRepository;

    private final StaffRepository staffRepository;

    public StaffServiceImpl(StaffRepository staffRepository) {
        this.staffRepository = staffRepository;
    }

    @Override
    public List<StaffDto> findAll() {
        return staffRepository.findAll().stream().map(item-> StaffConverter.toDto(item)).collect(Collectors.toList());
    }

    @Override
    public StaffDto findStaffById(int id) {
        return StaffConverter.toDto(staffRepository.getById(id));
    }

    @Override
    public StaffDto createStaff(StaffDto staffDto) {
        List<RoleEntity>  roleEntities = roleRepository.findAllById(staffDto.getRoleId());
        StaffEntity staffEntity = StaffConverter.toEntity(staffDto);
        staffEntity.setRoles(roleEntities);
        return StaffConverter.toDto(staffRepository.save(staffEntity));
    }

    @Override
    public StaffDto updateStaff(int id, StaffDto staffDto) {
        List<RoleEntity> roleEntities = roleRepository.findAllById(staffDto.getRoleId());
        StaffEntity staffEntity = staffRepository.findById(id).orElse(null);
        staffEntity.setRoles(roleEntities);
        staffEntity.setFullName(staffDto.getFullName());
        staffEntity.setPassWord(staffDto.getPassWord());
        staffEntity.setAddress(staffDto.getAddress());
        staffEntity.setMail(staffDto.getMail());
        staffEntity.setPhone(staffDto.getPhone());
        staffEntity.setDateOfBirth(staffDto.getDateOfBirth());
        staffEntity.setStatus(staffDto.getStatus());
        staffEntity.setCreatedDate(staffDto.getCreatedDate());
        staffEntity.setModifiedDate(staffDto.getModifiedDate());
        staffEntity.setCreateBy(staffDto.getCreateBy());
        staffEntity.setModifiedBy(staffDto.getModifiedBy());
        return StaffConverter.toDto(staffRepository.save(staffEntity));
    }

    @Override
    public Page<StaffDto> getAllStaff(Pageable pageable) {
        Page<StaffEntity> staffEntityPage = staffRepository.findAll(pageable);
        Page<StaffDto> staffDtoPage = staffEntityPage.map(item->StaffConverter.toDto(item));
        return staffDtoPage;
    }
}