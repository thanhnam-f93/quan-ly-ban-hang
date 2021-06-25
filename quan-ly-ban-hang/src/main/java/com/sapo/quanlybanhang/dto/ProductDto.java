package com.sapo.quanlybanhang.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
@Data
public class ProductDto {

    private int id;

    private String code;

    private String name;

    private int brandID;

    private int numberProduct;

    private int sellProduct;

    private String image;

    private float price;

    private int supplierId;

    private String description;

    private int colorId;

    private Date createdDate;

    private Date modifiedDate;

    private Date sizeId;

    private Date categoryId;

    private String createBy;

    private String modifiedBy;
}
