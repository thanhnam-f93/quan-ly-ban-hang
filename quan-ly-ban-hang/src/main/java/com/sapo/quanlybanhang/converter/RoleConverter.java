package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.RoleDto;
import com.sapo.quanlybanhang.entity.RoleEntity;

public class RoleConverter {
    public static RoleDto toDto (RoleEntity roleEntity){
        RoleDto roleDto = new RoleDto();
        roleDto.setId(roleEntity.getId());
        roleDto.setName(roleEntity.getName());
        return roleDto;
    }

    public static RoleEntity toEntity (RoleDto roleDto){
        RoleEntity roleEntity = new RoleEntity();
        roleEntity.setId(roleDto.getId());
        roleEntity.setName(roleDto.getName());
        return roleEntity;
    }
}
