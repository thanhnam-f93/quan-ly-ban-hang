package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.StaffEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository<StaffEntity, Integer> {
    StaffEntity findOneById(Integer id);
}
