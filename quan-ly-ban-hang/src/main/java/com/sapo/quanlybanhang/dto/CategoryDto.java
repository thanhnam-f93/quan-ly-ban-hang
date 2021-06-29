package com.sapo.quanlybanhang.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.List;

@Data
public class CategoryDto {

    private int id;

    private String code;

    private String name;

    private Date createdDate;

    private Date modifiedDate;

    private String create_by;

    private String modified_by;

    private List<ProductDto> productDtoList;

}
