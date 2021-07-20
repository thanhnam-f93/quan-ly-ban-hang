package com.sapo.quanlybanhang.dto;

import com.sapo.quanlybanhang.entity.PermissionEntity;
import com.sapo.quanlybanhang.entity.RoleEntity;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class RoleDto {

    private int id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private String code;

    private String notes;

    private Date createdDate;

    private Date modifiedDate;

    private String createBy;

    private String modifiedBy;

    private List<Integer> permissionId;

    private  List<String> permissionName= new ArrayList();

    private List<PermissionEntity> permissionEntity = new ArrayList<>();
}
