package com.sapo.quanlybanhang.dto;

import lombok.Data;

@Data
public class JwtRespone {
    private String token;
    private String type = "Bearer";
    private String fullName;

    public JwtRespone(String token, String fullName) {
        this.token = token;
        this.fullName = fullName;
    }
}
