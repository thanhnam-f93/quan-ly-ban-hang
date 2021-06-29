package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity,Integer> {
    @Query(value = "select * from products as p where p.name LIKE %?1% ", nativeQuery = true)
    List<ProductEntity> findAll(String keyword);



}
