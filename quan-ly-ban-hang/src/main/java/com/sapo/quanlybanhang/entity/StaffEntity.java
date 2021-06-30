package com.sapo.quanlybanhang.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.util.*;

@Entity
@Table(name = "staff")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class StaffEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="full_name")
    private String fullName;

    @Column(name="pass_word")
    private String passWord;

    @Column(name="address")
    private String address;

    @Column(name="mail")
    private String mail;

    @Column(name="phone")
    private String phone;

    @Column(name="date_of_birth")
    private Date dateOfBirth;

    @Column(name="status")
    private String status;

    @Column(name ="created_date")
    private Date createdDate;

    @Column(name ="modified_date")
    private Date modifiedDate;

    @Column(name ="created_by")
    private String createBy;

    @Column(name ="modifed_by")
    private String modifiedBy;

   @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
   @JoinTable(name = "staff_role",
              joinColumns = @JoinColumn(name = "staff_id"),
              inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Collection<RoleEntity> roles;

 @OneToMany(mappedBy = "staffBill")
 private List<BillEntity> billEntities = new ArrayList();




}
