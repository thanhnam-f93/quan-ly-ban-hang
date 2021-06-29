package com.sapo.quanlybanhang.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Data
public class BrandDto {

    private int id;

    private String name;

}
