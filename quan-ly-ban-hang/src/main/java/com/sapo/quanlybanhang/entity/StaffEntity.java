package com.sapo.quanlybanhang.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "staff")
@Data
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

    @Column(name="state")
    private String status;

    @Column(name ="created_date")
    private Date createdDate;

    @Column(name ="modified_date")
    private Date modifiedDate;

    @Column(name ="created_by")
    private String createBy;

    @Column(name ="modified_by")
    private String modifiedBy;

    @OneToMany(mappedBy = "staff")
    private List<OrderEntity> orderEntities = new ArrayList();


}
