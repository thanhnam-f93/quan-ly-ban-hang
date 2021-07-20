package com.sapo.quanlybanhang.dto;

import com.sapo.quanlybanhang.entity.CustomerEntity;
import com.sapo.quanlybanhang.entity.StaffEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
@Data@NoArgsConstructor@AllArgsConstructor
public class FeedBackDto {

    private int id;
    private Date createdDate = new Date();
    private String content;
    private String slove;
    private String createdBy;
    private int customerId;
    private String customerName;
    private String title;
    private Date modifiedDate= new Date();
    private String modifiedBy;

    public FeedBackDto(Date createdDate, String content, String slove, String createdBy, int customerId, String customerName, String title, Date modifiedDate, String modifiedBy) {
        this.createdDate = createdDate;
        this.content = content;
        this.slove = slove;
        this.createdBy = createdBy;
        this.customerId = customerId;
        this.customerName = customerName;
        this.title = title;
        this.modifiedDate = modifiedDate;
        this.modifiedBy = modifiedBy;
    }
}
