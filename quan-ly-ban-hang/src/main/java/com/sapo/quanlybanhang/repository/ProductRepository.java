package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {
}
