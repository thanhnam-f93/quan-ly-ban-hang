package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.BrandEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends JpaRepository<BrandEntity,Integer> {
}
