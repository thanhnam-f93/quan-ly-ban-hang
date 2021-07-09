package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateDto {
    private int id;

    private String code;

    private String name;

    private String brandName;

    private int numberProduct;

    private int sell_product;

    private String image;

    private float price;

    private String supplierName;

    private String description;

    private String color;

    private Date created_date;

    private Date modifiedDate;

    private String size;

    private String categoryName;

    private String modified_by;

    private String created_by;

    private String status;
}
