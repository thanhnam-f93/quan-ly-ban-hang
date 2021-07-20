package com.sapo.quanlybanhang.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class OrderDto {

    private Integer id;

    private String code;

    private Long price;

    private Timestamp createdDate;

    private Timestamp modifiedDate;

    private String createBy;

    private String modifiedBy;

    private Integer customId;

    private Integer staffId;

    private List<OrderDetailDto> orderDetailDtos;

    private String customerName;

    private String StaffName;

    private String customerPhone;

    private String customerEmail;

    private Long discount;


}
