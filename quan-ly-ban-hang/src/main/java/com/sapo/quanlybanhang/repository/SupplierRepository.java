package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.ProductEntity;
import com.sapo.quanlybanhang.entity.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupplierRepository extends JpaRepository<SupplierEntity,Integer> {
    @Query(value = "SELECT * FROM supplier as s where s.code like %?1% OR s.name like %?1% or s.phone like  %?1%  ", nativeQuery = true)
    List<SupplierEntity> findAll(String keyword);

    @Query(value = "SELECT * FROM supplier as p where created_date>= now() - INTERVAL 7 day ", nativeQuery = true)
    List<SupplierEntity> getALLByDay();

    @Query(value = " SELECT * FROM supplier where modified_by = ?1 ", nativeQuery = true)
    List<SupplierEntity> getALLByModified(String keyword);

}