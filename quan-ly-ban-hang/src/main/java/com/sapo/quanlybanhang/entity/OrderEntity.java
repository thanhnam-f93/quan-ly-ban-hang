package com.sapo.quanlybanhang.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "orders")

public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "code")
    private String code;
    @Column(name ="created_date")
    private Timestamp createdDate;

    @Column(name ="modified_date")
    private Timestamp modifiedDate;

    @Column(name ="created_by")
    private String createBy;

    @Column(name ="modified_by")
    private String modifiedBy;

    @Column(name ="price")
    private Long price;

    @Column (name = "state")
    private String state;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private CustomerEntity customer;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private StaffEntity staff;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderDetailEntity> orderDetailEntities = new ArrayList();

    @OneToMany(mappedBy = "orderEntity", cascade = CascadeType.ALL)
    private List<BillEntity> billEntities = new ArrayList();


}
