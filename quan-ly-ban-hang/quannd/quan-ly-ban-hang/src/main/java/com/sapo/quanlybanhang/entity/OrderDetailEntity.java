package com.sapo.quanlybanhang.entity;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "oder_detail")
@Data
public class OrderDetailEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "quanlity")
    private int quanlity;
    @Column(name = "discount")
    private int discount;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "order_id")
    private OrderEntity order;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "product_id")
    private OrderEntity product;



    public OrderDetailEntity(int id, int quanlity, int discount) {
        this.id = id;
        this.quanlity = quanlity;
        this.discount = discount;
    }

    public OrderDetailEntity() {
    }

}
