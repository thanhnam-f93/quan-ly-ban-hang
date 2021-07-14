package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.OrderConverter;
import com.sapo.quanlybanhang.converter.OrderDetailConverter;
import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.dto.OrderListDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.*;
import com.sapo.quanlybanhang.repository.*;
import com.sapo.quanlybanhang.service.IOrderService;
import com.sapo.quanlybanhang.utils.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class OrderService implements IOrderService {
    public static final String PREFIX = "SON";
    Logger logger = LoggerFactory.getLogger(OrderService.class);
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

    @Autowired
    OrderDetailRepository orderDetailRepository;


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
        LocalDateTime tStart = LocalDateTime.of(2021, 2, 13, 15, 56);

       logger.info(String.valueOf(tStart.getSecond()));
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
        if(productEntities.get(index).getNumberProduct()-item.getQuanlity()<0){
            return null;
        }
           ProductEntity productEntity = productEntities.get(index);
            item.setOrder(orderEntity);
            price += item.getDiscount() * item.getQuanlity();
            item.setPrice(item.getDiscount() * item.getQuanlity());
            item.setProduct(productEntity);
            item.getProduct().setSellProduct(item.getQuanlity()+item.getProduct().getSellProduct());
            item.getProduct().setNumberProduct(item.getProduct().getNumberProduct()-item.getQuanlity());
            item.setRemainAmount(item.getQuanlity());
            item.setPrice(item.getDiscount() * item.getQuanlity());
            index+=1;
        }
        CustomerEntity customerEntity=new CustomerEntity();
        StaffEntity staffEntity =  staffRepository.findOneByPhone(SecurityUtils.getPrincipal().getUsername());
        orderEntity.setCreateBy(SecurityUtils.getPrincipal().getFullName());
        orderEntity.setPrice(price);
        orderEntity.setOrderDetailEntities(orderDetailEntities);
        if(orderDto.getCustomId()==null ){
            customerEntity.setName("Khách lẻ");
        }else{
            customerEntity = customerRepository.findOneById(orderDto.getCustomId());
        }
        Long dismount = orderDto.getDismount();
        if(dismount == null ){
            orderEntity.setDismount(0L);
        }else{
            orderEntity.setDismount(dismount);
        }
        customerEntity.setPhone("xxxxx");
        customerEntity.setStatus("on");
        customerEntity = customerRepository.save(customerEntity);
        orderEntity.setCustomer(customerEntity);
        orderEntity.setStaff(staffEntity);
        orderEntity.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        orderEntity.setDismount(orderDto.getDismount());
        orderEntity = orderRepository.save(orderEntity);
         if(orderEntity != null){
             return OrderConverter.toDto(orderEntity);
         }
    return null;
    }

    @Override
    @Transactional
    public OrderListDto findByCodeAndCustomer(OrderPageable orderPageable) {
            return orderDao.findByCodeAndCustomer( orderPageable);


    }

    @Override
    public List<Long> findPrice(LocalDate optionTime) {
        return null;
    }

    @Override
    public OrderEntity findById(Integer id) {
        return orderRepository.findOneById(id);
    }

    @Override
    public Integer getTotalItem() {
        return (int) orderRepository.count();
    }


}
