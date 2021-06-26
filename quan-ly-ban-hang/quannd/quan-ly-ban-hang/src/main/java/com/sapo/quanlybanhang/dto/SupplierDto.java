package com.sapo.quanlybanhang.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
public class SupplierDto {

    private int id;

    private String code;

    private String name;

    private String email;

    private String address;

    private String phone;
}
