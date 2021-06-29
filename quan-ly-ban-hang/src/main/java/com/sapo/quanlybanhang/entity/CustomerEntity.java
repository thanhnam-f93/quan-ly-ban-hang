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
@Table(name = "customers")
@Data
public class CustomerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "gender")
    private String gender;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "note")
    private String note;

    @Column(name ="created_date")
    private Date createdDate;

    @Column(name ="modified_date")
    private Date modifiedDate;

    @Column(name ="created_by")
    private String createBy;

    @Column(name ="modified_by")
    private String modifiedBy;

    @OneToMany(mappedBy = "customer")
    private List<OrderEntity> orderEntities = new ArrayList();

    @OneToMany(mappedBy = "customerBill")
    private List<BillEntity> billEntities = new ArrayList();


}
