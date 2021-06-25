package com.sapo.quanlybanhang.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
public class CustomerDto {

    private int id;

    private String name;

    private String phone;

    private String email;

    private String gender;

    private Date dateOfBirth;

    private String note;

    private Date createdDate;

    private Date modifiedDate;

    private String createBy;

    private String modifiedBy;
}
