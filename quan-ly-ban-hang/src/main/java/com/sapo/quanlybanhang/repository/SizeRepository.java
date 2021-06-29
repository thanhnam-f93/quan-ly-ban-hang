package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.SizeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SizeRepository extends JpaRepository<SizeEntity,Integer> {
}