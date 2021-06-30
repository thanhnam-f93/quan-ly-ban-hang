package com.sapo.quanlybanhang.dto;


import lombok.*;

import javax.persistence.Entity;
import java.sql.Timestamp;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

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


}
