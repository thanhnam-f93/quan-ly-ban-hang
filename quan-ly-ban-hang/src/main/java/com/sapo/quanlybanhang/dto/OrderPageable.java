package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderPageable {
    OptionTime optionTime;
    private Integer page;
    private Integer limit;
    private LocalDate orderTime;
    private String inputOrder;
//    private String optionTime;
}
