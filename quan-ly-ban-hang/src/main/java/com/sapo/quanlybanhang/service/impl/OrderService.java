package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.OrderConverter;
import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.entity.*;
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
//        Long price = 0L;
//        Integer index = 0;
//        OrderEntity orderEntity = OrderConverter.toEntity(orderDto);
//        List<OrderDetailDto> orderDetailDtos = orderDto.getOrderDetailDtos();
////        List<OrderDetailDto> listOrderDetail = orderDetailDtos;
//        List<Integer> productIds = orderDetailDtos.stream()
//                .map(item -> item.getProductId()).collect(Collectors.toList());
//        if(orderDetailDtos.size()==0)
//            return null;
//          List<ProductEntity> productEntities = productRepository.findAllById(productIds);
//          List<OrderDetailEntity> orderDetailEntities = orderDetailDtos.stream()
//                                .map(item -> OrderDetailConverter.toEntity(item)).collect(Collectors.toList());
//
//        for(OrderDetailEntity item : orderDetailEntities){
//
//           ProductEntity productEntity = productEntities.get(index);
//            item.setOrder(orderEntity);
//            price += item.getDiscount() * item.getQuanlity();
//            item.setProduct(productEntity);
//            index+=1;
//        }
//        orderEntity.setPrice(price);
//        orderEntity.setOrderDetailEntities(orderDetailEntities);
//        CustomerEntity customerEntity = customerRepository.findOneById(orderDto.getCustomId());
//        StaffEntity staffEntity =  staffRepository.findOneById(orderDto.getStaffId());
//        orderEntity.setCustomer(customerEntity);
//        orderEntity.setStaff(staffEntity);
//        orderEntity = orderRepository.save(orderEntity);
//         if(orderEntity != null){
//             return orderDto;
//         }
         return null;

    }
}
