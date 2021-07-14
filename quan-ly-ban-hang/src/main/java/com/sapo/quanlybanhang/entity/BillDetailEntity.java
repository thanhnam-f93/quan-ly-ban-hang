package com.sapo.quanlybanhang.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "bill_details")
@Data
public class BillDetailEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "code")
    private String code;

    @Column(name = "quanlity")
    private Integer quanlity;

    @Column(name = "discount")
    private Long discount;

    @Column(name = "price")
    private Long price;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity productBill;

    @ManyToOne
    @JoinColumn(name = "bill_id")
    private BillEntity bill;


}
