package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.dto.OrderItem;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {

     Page<OrderEntity> findByState(String state, Pageable pageable);
     OrderEntity findOneById(Integer id);
     @Query("select new com.sapo.quanlybanhang.dto.OrderItem(count (o), sum(o.price))  " +
             "from OrderEntity o where date(o.createdDate)= Date(?1)")
     public OrderItem findPrice(LocalDate optionTime);


}
