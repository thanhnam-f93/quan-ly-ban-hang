package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer> {
    CustomerEntity findOneById(Integer id);
}
