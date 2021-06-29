package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.entity.StaffEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository extends JpaRepository<StaffEntity, Integer> {

    Page<StaffEntity> findAll(Pageable pageable);
}
