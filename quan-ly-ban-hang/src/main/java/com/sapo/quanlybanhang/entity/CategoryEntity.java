package com.sapo.quanlybanhang.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "categories")
@Data
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "code")
    private String code;
    @Column(name = "name")
    private String name;
    @Column(name = "created_date")
    private Date createdDate;
    @Column(name = "modified_date")
    private Date modifiedDate;
    @Column(name = "created_by")
    private String create_by;
    @Column(name = "modified_by")
    private String modified_by;

    @OneToMany(mappedBy = "category") // Quan hệ 1-n với đối tượng ở dưới (Product) (1 danh sách có nhiều sản phẩm)
    // MapopedBy trỏ tới tên biến category_id ở trong product.
    private List<ProductEntity> productEntities;


    public CategoryEntity(int id, String code, String name, Date createdDate, Date modifiedDate, String create_by, String modified_by) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.create_by = create_by;
        this.modified_by = modified_by;
    }

    public CategoryEntity() {
    }
}
