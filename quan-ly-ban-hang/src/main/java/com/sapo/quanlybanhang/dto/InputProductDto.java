package com.sapo.quanlybanhang.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InputProductDto {

    private int id;

    private String code;

    private String name;

    private int brand_id;

    private int numberProduct;

    private int sell_product;

    private String image;

    private float price;

    private int supplier_id;

    private String description;

    private int color_id;

    private Date createdDate;

    private Date modified_date;

    private int size_id;

    private int category_id;

    private String modified_by;

    private String created_by;

    private String status;
}
