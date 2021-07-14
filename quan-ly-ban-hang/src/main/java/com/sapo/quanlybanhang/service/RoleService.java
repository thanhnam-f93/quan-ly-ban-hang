package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.RoleDto;

import java.util.List;

public interface RoleService {

    //Lấy danh sách Role
    public List<RoleDto> findAll();

    //Tạo mới một Role
    public RoleDto createRole(RoleDto roleDto);

    //Cập nhật một Role
    public RoleDto updateRole(int id, RoleDto roleDto);
}
