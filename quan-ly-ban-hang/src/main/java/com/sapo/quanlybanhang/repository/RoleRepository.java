package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Integer> {
//    RoleEntity findOneById(Integer id);
}
