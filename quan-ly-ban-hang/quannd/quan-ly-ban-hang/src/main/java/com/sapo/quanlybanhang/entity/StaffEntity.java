package com.sapo.quanlybanhang.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
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
    @Column(name="status")
    private String status;
    @Column(name ="created_date")
    private Date createdDate;
    @Column(name ="modified_date")
    private Date modifiedDate;
    @Column(name ="created_by")
    private String createBy;
    @Column(name ="modified_by")
    private String modifiedBy;

//    @OneToMany(mappedBy = "staff", cascade = CascadeType.ALL)
//    private List<OrderEntity> orderEntities;
//
//    @OneToMany(mappedBy = "staff", cascade = CascadeType.ALL)
//    @EqualsAndHashCode.Exclude
//    @ToString.Exclude
//    private Collection<StaffRoleEntiry> staffRoleEntiries;

    public StaffEntity(int id, String fullName, String passWord, String address, String mail, String phone, Date dateOfBirth, String status, Date createdDate, Date modifiedDate, String createBy, String modifiedBy) {
        this.id = id;
        this.fullName = fullName;
        this.passWord = passWord;
        this.address = address;
        this.mail = mail;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.status = status;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.createBy = createBy;
        this.modifiedBy = modifiedBy;
    }

    public StaffEntity() {
    }
}
