package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.BrandEntity;
import com.sapo.quanlybanhang.entity.ColorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorRepository extends JpaRepository<ColorEntity,Integer> {
}
