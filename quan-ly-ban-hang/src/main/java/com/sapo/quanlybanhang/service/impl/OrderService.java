package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.OrderConverter;
import com.sapo.quanlybanhang.converter.OrderDetailConverter;
import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.entity.*;
import com.sapo.quanlybanhang.repository.CustomerRepository;
import com.sapo.quanlybanhang.repository.OrderRepository;
import com.sapo.quanlybanhang.repository.ProductRepository;
import com.sapo.quanlybanhang.repository.StaffRepository;
import com.sapo.quanlybanhang.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
     private CustomerRepository customerRepository;

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private IOrderDao orderDao;

    @Override
    public List<OrderDto> findAll( Pageable pageable) {
        List<OrderEntity> list = orderRepository.findAll(pageable).getContent();
        return list.stream().map(item-> OrderConverter.toDto(item)).collect(Collectors.toList());
    }

    /**
     * create bill, save into database

     */
    @Override
    @Transactional
    public OrderDto save(OrderDto orderDto) {
        Long price = 0L;
        Integer index = 0;
        OrderEntity orderEntity = OrderConverter.toEntity(orderDto);
        List<OrderDetailDto> orderDetailDtos = orderDto.getOrderDetailDtos();
        List<Integer> productIds = orderDetailDtos.stream()
                .map(item -> item.getProductId()).collect(Collectors.toList());
          List<ProductEntity> productEntities = productRepository.findAllById(productIds);
          List<OrderDetailEntity> orderDetailEntities = orderDetailDtos.stream()
                                .map(item -> OrderDetailConverter.toEntity(item)).collect(Collectors.toList());

        for(OrderDetailEntity item : orderDetailEntities){
           ProductEntity productEntity = productEntities.get(index);
            item.setOrder(orderEntity);
            price += item.getDiscount() * item.getQuanlity();
            item.setProduct(productEntity);
            index+=1;
        }
        orderEntity.setPrice(price);
        orderEntity.setOrderDetailEntities(orderDetailEntities);
        CustomerEntity customerEntity = customerRepository.findOneById(orderDto.getCustomId());
        StaffEntity staffEntity =  staffRepository.findOneById(orderDto.getStaffId());
        orderEntity.setCustomer(customerEntity);
        orderEntity.setStaff(staffEntity);
        orderEntity.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        orderEntity = orderRepository.save(orderEntity);
         if(orderEntity != null){
             return OrderConverter.toDto(orderEntity);
         }
    return null;
    }

    @Override
    @Transactional
    public List<OrderDto> findByCodeAndCustomer(String input) {
        return orderDao.findByCodeAndCustomer(input).stream().map(item -> OrderConverter.toDto(item)).collect(Collectors.toList());
    }
}
