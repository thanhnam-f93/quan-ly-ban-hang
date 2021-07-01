package com.sapo.quanlybanhang.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto  {

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


}
