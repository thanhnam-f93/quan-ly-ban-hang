package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderPageable {
    private Integer page;
    private Integer limit;
    private LocalDate startedTime;
    private String inputOrder;
    private LocalDate endedTime;
}
