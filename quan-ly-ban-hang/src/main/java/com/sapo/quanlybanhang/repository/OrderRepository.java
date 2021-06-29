package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {

     Page<OrderEntity> findByState(String state,Pageable pageable);
     OrderEntity findOneById(Integer id);

}
