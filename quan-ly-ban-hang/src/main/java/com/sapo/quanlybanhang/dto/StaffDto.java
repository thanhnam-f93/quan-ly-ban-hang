package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class StaffDto {

    private int id;

    private String fullName;

    private String passWord;

    private String address;

    private String mail;

    private String phone;

    private Date dateOfBirth;

    private String status;

    private Date createdDate;

    private Date modifiedDate;

    private String createBy;

    private String modifiedBy;
}
