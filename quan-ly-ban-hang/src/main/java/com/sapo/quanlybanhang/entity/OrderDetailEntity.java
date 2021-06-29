package com.sapo.quanlybanhang.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "oder_detail")
@Data
@EqualsAndHashCode
public class OrderDetailEntity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "quanlity")
    private int quanlity;

    @Column(name = "discount")
    private Long discount;

    @Column (name = "code")
    private  String code;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderEntity order;

    @Column (name = "remain_amount")
    private Integer remainAmount;

    @Column (name = "price")
    private Long price;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;

}
