package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.RoleDto;
import com.sapo.quanlybanhang.entity.RoleEntity;

public class RoleConverter {
    public static RoleDto toDto (RoleEntity roleEntity){
        RoleDto roleDto = new RoleDto();
        roleDto.setId(roleEntity.getId());
        roleDto.setName(roleEntity.getName());
      	roleDto.setCode(roleEntity.getCode());
        roleDto.setNotes(roleEntity.getNotes());
        roleDto.setCreatedDate(roleEntity.getCreatedDate());
        roleDto.setModifiedDate(roleEntity.getModifiedDate());
        roleDto.setCreateBy(roleEntity.getCreateBy());
        roleDto.setModifiedBy(roleEntity.getModifiedBy());
        return roleDto;
    }

    public static RoleEntity toEntity (RoleDto roleDto){
        RoleEntity roleEntity = new RoleEntity();
        roleEntity.setId(roleDto.getId());
        roleEntity.setName(roleDto.getName());
	    roleEntity.setCode(roleDto.getCode());
        roleEntity.setNotes(roleDto.getNotes());
        roleEntity.setCreatedDate(roleDto.getCreatedDate());
        roleEntity.setModifiedDate(roleDto.getModifiedDate());
        roleEntity.setCreateBy(roleDto.getCreateBy());
        roleEntity.setModifiedBy(roleDto.getModifiedBy());
        return roleEntity;
    }
}
