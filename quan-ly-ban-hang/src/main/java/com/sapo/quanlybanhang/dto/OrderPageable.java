package com.sapo.quanlybanhang.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy/MM/dd", timezone="EST")
    private LocalDate startedTime;
    private String inputOrder;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy/MM/dd", timezone="EST")
    private LocalDate endedTime;
}
