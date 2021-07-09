package com.sapo.quanlybanhang.dto;

import lombok.Data;

import java.util.Date;

@Data
public class RoleDto {

    private int id;

    private String name;

    private String code;

    private String notes;

    private Date createdDate;

    private Date modifiedDate;

    private String createBy;

    private String modifiedBy;
}
