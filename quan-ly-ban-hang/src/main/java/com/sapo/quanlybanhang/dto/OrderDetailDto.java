package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.criteria.CriteriaBuilder;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailDto {

    private Integer id;

    private String code;

    private Integer quanlity;

    private Long discount;

    private String codeOrder;

    private String codeProduct;

    private Integer productId;

    private Integer orderId;


}
