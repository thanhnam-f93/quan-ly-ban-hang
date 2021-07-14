package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class OrderItem {
    private Long countOrder;
    private Long priceOrder;
}
