package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderPageable {
    private Integer page;
    private Integer limit;
    String sortBy;
    String status;
//    String sortName;
}
