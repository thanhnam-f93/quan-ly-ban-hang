package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.OrderConverter;
import com.sapo.quanlybanhang.converter.OrderDetailConverter;
import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.entity.OrderDetailEntity;
import com.sapo.quanlybanhang.entity.OrderEntity;
import com.sapo.quanlybanhang.repository.OrderRepository;
import com.sapo.quanlybanhang.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<OrderDto> findAll(String status, Pageable pageable) {
        List<OrderEntity> list = orderRepository.findByState(status, pageable).getContent();
        return list.stream().map(item-> OrderConverter.toDto(item)).collect(Collectors.toList());
    }

    /**
     * create bill, save into database

     */
    @Override
    @Transactional
    public OrderDto save(OrderDto orderDto) {
        Long price = 0L;
        OrderEntity orderEntity = OrderConverter.toEntity(orderDto);
        List<OrderDetailDto> orderDtos = orderDto.getOrderDetailDtos();
        if(orderDtos.size()==0)
            return null;
        List<OrderDetailEntity> orderDetailEntities = orderDtos.stream().map(item -> OrderDetailConverter.toEntity(item)).collect(Collectors.toList());
        for(OrderDetailEntity item : orderDetailEntities){
            item.setOrder(orderEntity);
            price += item.getDiscount() * item.getQuanlity();
        }
        orderEntity.setPrice(price);
        orderEntity.setOrderDetailEntities(orderDetailEntities);
         orderEntity = orderRepository.save(orderEntity);
         if(orderEntity != null){
             return orderDto;
         }
         return null;

    }
}
