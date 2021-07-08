package com.sapo.quanlybanhang.dto;

import com.sapo.quanlybanhang.entity.RoleEntity;
import lombok.Data;
import javax.validation.constraints.*;
import java.util.*;

@Data
public class StaffDto {

    private int id;

    @NotBlank(message = "FullName is mandatory")
    private String fullName;

//    @NotBlank(message = "PassWord is mandatory")
//    @Size(min = 6, max = 30, message = "Password must be 6-20 characters ")
    private String passWord;

    @NotBlank(message = "Address is mandatory")
    private String address;

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Invalid email ")
    private String mail;

    @NotBlank(message = "Phone is mandatory")
    @Pattern(
            regexp = "^[0-9]{10}$",
            message = "Only Number Phone are accepted."
    )
    private String phone;


    @NotNull(message = "DateOfBirth is mandatory")
//    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @Past(message = "Date input is invalid for a birth date.")
    private Date dateOfBirth;

    private String status;

//    @NotNull(message = "CreatedDate is mandatory")
//    @Past(message = "Date input is invalid for created Date.")
    private Date createdDate;

//    @Past(message = "Date input is invalid for modified Date.")
    private Date modifiedDate;

//    @NotBlank(message = "CreateBy is mandatory")
    private String createBy;

    private String modifiedBy;

    private List<Integer> roleId;

    private  List<String> roleName= new ArrayList();

    private List<RoleEntity> roleEntity = new ArrayList<>();

}
