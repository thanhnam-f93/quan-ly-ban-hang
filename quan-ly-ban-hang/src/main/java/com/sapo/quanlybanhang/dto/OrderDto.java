package com.sapo.quanlybanhang.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
@Data
public class OrderDto {

    private int id;

    private String code;

    private String customerId;

    private String staffId;

    private Date createdDate;

    private Date modifiedDate;

    private String createBy;

    private String modifiedBy;

}
