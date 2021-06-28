package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.BrandEntity;
import com.sapo.quanlybanhang.entity.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupplierRepository extends JpaRepository<SupplierEntity,Integer> {
}
