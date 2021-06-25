package com.sapo.quanlybanhang.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "products")

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
    @Column(name = "status")
    private String status;

    @Column(name ="created_date")
    private Date createdDate;
    @Column(name ="modified_date")
    private Date modifiedDate;

    @Column(name ="modified_by")
    private String modifiedBy;
    @Column(name ="created_by")
    private String createdBy;

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

    public ProductEntity(int id, String code, String name, int numberProduct, int sellProduct, String image, float price, String description,String status, Date createdDate, Date modifiedDate, String modifiedBy, String createdBy) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.numberProduct = numberProduct;
        this.sellProduct = sellProduct;
        this.image = image;
        this.price = price;
        this.description = description;
        this.status = status;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.modifiedBy = modifiedBy;
        this.createdBy = createdBy;
    }


    public ProductEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumberProduct() {
        return numberProduct;
    }

    public void setNumberProduct(int numberProduct) {
        this.numberProduct = numberProduct;
    }

    public int getSellProduct() {
        return sellProduct;
    }

    public void setSellProduct(int sellProduct) {
        this.sellProduct = sellProduct;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
