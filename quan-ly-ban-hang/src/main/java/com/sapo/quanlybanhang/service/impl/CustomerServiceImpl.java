package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.CustomerConvert;
import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;
import com.sapo.quanlybanhang.helper.Valid;
import com.sapo.quanlybanhang.repository.CustomerRepository;
import com.sapo.quanlybanhang.service.CustomerService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final Valid valid;
    public CustomerServiceImpl(CustomerRepository customerRepository, Valid valid) {
        this.customerRepository = customerRepository;
        this.valid = valid;
    }

    @Override
    public CustomerDto findById(Integer id) {
        CustomerEntity customerEntity = customerRepository.getById(id);
        return CustomerConvert.toDTO(customerEntity);
    }

    @Override
    public Page<CustomerDto> search(String input, Pageable pageable) {
        if(valid.checkNumber(input)){
            return findByPhone(input,pageable);
        }else {
            Page<CustomerEntity> entityPage = customerRepository.search(input, pageable);
            Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
            return entityPage.hasContent() ? dtoPage : null;
        }
    }

    @Override
    public Page<CustomerDto> findByPhone(String input, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByPhone(input, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByGender(String input, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByGender(input, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByAddress(String input, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAddress(input, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByStaff(String input, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByCreateBy(input, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findAgeUnder18(Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeUnder18(pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByAgeBetween18and35(Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeBetween18and35(pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByAgeOver35(Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeOver35(pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }


    @Override
    public Page<CustomerDto> getPage(Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findAll(pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public List<CustomerDto> getAll(){
        return customerRepository.All().stream().map(item->CustomerConvert.toDTO(item)).collect(Collectors.toList());
    }
    @Override
    public void save(CustomerDto customerDto) {
        customerRepository.save(CustomerConvert.toEntity(customerDto));
    }

    @Override
    public void delete(Integer id) {
        customerRepository.deleteById(id);
    }

    @Override
    public Integer countCustomersByMonth(Integer m, Integer n) {
        return customerRepository.getNew(m,n);
    }

    @Override
    public List<Object[]> getStatistics() {
        return customerRepository.getStatistics();
    }
}