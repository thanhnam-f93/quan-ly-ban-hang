package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.CustomerEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer> {

    @Query(value = "select c from CustomerEntity c  where c.email like %:input% or c.name like %:input%")
    Page<CustomerEntity> search(@Param("input") String input, Pageable pageable);

    @Query(value = "select c from CustomerEntity c where c.phone like %:phone%")
    Page<CustomerEntity> findByPhone(@Param("phone") String create, Pageable pageable);

    @Query(value = "select * from customers where gender = :gender", nativeQuery = true)
    Page<CustomerEntity> findByGender(@Param("gender") String gender, Pageable pageable);

    @Query(value = "select c from CustomerEntity c  where c.createBy like %:create%")
    Page<CustomerEntity> findByCreateBy(@Param("create") String create, Pageable pageable);

    @Query(value = "select c from CustomerEntity c  where c.address like %:address%")
    Page<CustomerEntity> findByAddress(@Param("address") String address, Pageable pageable);

    @Query(value = "select c from CustomerEntity c  where c.createBy like %:staff%")
    Page<CustomerEntity> findByStaff(@Param("staff") String address, Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE(), date_of_birth) / 365, 0) < 18", nativeQuery = true)
    Page<CustomerEntity> findByAgeUnder18(Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE()," +
            " date_of_birth) / 365, 0) between 18 and 35", nativeQuery = true)
    Page<CustomerEntity> findByAgeBetween18and35(Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE(), date_of_birth) / 365, 0) > 35;", nativeQuery = true)
    Page<CustomerEntity> findByAgeOver35(Pageable pageable);

    @Query(value = "select * from customers", nativeQuery = true)
    Page<CustomerEntity> fillAll(Pageable pageable);

    @Query(value = "select * from customers", nativeQuery = true)
    List<CustomerEntity> All();

    @Query(value = "call getNewCustomersByMonth(:m,:y)",nativeQuery = true)
    Integer getNew(Integer m, Integer y);

    @Procedure(procedureName = "StatisticsByTime")
    List<Object[]> getStatistics();


    CustomerEntity findOneById(Integer customId);
}
