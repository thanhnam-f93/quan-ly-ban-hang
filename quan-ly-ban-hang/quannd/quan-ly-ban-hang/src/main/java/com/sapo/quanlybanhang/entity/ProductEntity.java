package com.sapo.quanlybanhang.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "products")
@Setter
@Getter

public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "code")
    private String code;
    @Column(name = "name")
    private String name;
    @Column(name = "number_product")
    private int numberProduct;
    @Column(name = "sell_product")
    private int sellProduct;
    @Column(name = "image")
    private String image;
    @Column(name = "price")
    private float price;

    @Column(name = "decription")
    private String description;

    @Column(name ="created_date")
    private Date createdDate;
    @Column(name ="modified_date")
    private Date modifiedDate;

    @Column(name ="modified_by")
    private String modifiedBy;
    @Column(name ="created_by")
    private String createdBy;
    @Column(name ="state")
    private String state;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    private CategoryEntity category;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "brand_id")
    private BrandEntity brand;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "color_id")
    private ColorEntity color;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "size_id")
    private SizeEntity size;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "supplier_id")
    private SupplierEntity supplier;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Collection<OrderDetailEntity> orderDetailEntities;


}