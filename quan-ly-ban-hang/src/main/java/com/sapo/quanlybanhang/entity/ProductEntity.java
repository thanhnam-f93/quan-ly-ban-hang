package com.sapo.quanlybanhang.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "products")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private CategoryEntity category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand_id")
    private BrandEntity brand;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "color_id")
    private ColorEntity color;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "size_id")
    private SizeEntity size;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supplier_id")
    private SupplierEntity supplier;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Collection<OrderDetailEntity> orderDetailEntities;

    @OneToMany(mappedBy = "productBill", cascade = CascadeType.ALL)
    private Collection<BillDetailEntity> billDetailEntities;


}
