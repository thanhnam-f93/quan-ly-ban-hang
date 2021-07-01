package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.CustomerDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CustomerService {
    CustomerDto findById(Integer id);

    //
    Page<CustomerDto> search(String input, Pageable pageable);

    //
    Page<CustomerDto> findByPhone(String input, Pageable pageable);

    //
    Page<CustomerDto> findByGender(String input, Pageable pageable);

    //
    Page<CustomerDto> findByAddress(String input, Pageable pageable);

    //
    Page<CustomerDto> findByStaff(String input, Pageable pageable);

    //
    Page<CustomerDto> findAgeUnder18(Pageable pageable);

    //
    Page<CustomerDto> findByAgeBetween18and35(Pageable pageable);

    //
    Page<CustomerDto> findByAgeOver35(Pageable pageable);

    //
    Page<CustomerDto> getPage(Pageable pageable);

    //
    List<CustomerDto> getAll();
    //
    void save(CustomerDto customerDto);

    //
    void delete(Integer id);
    //
    Integer countCustomersByMonth(Integer m, Integer n);
    //
    List<Object[]> getStatistics();
}
