package com.sapo.quanlybanhang.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

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

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Collection<OrderEntity> orderEntities;


    public CustomerEntity(int id, String name, String phone, String email, String gender, Date dateOfBirth, String note, Date createdDate, Date modifiedDate, String createBy, String modifiedBy) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.note = note;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.createBy = createBy;
        this.modifiedBy = modifiedBy;
    }

    public CustomerEntity() {
    }
}
