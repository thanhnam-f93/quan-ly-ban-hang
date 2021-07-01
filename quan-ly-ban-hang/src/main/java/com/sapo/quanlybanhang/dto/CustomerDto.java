package com.sapo.quanlybanhang.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.validation.annotation.Validated;

import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDto implements Serializable {
    private int id;
    @Size(min = 5, max = 250, message = "Data Length must between 5 and 250")
    private String name;
    @NumberFormat
    @Length(min = 10,max = 11,message = "So dien thoai khong hop le")
    private String phone;
    @Size(min = 5, max = 250, message = "Data Length must between 5 and 250")
    private String email;
    @NotNull(message = "Khong duoc de trong")
    private String gender;
    @Size(min = 5, max = 250, message = "Data Length must between 5 and 250")
    private String address;
    private Date dateOfBirth;
    @Size(min = 5, max = 250, message = "Data Length must between 5 and 250")
    private String note;
    @Past(message = "Date Create must Before Present")
    private Date createdDate;
    private Date modifiedDate;
    private String createBy;
    private String modifiedBy;

    public CustomerDto(String name, String phone, String email, String gender,String address, Date dateOfBirth, String note, Date createdDate, Date modifiedDate, String createBy, String modifiedBy) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.note = note;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.createBy = createBy;
        this.modifiedBy = modifiedBy;
    }
}

