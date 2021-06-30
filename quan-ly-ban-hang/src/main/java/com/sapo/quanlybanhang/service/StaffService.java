package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.entity.StaffEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface StaffService {

    //Lấy danh sách Staff
    public List<StaffDto> findAll();

    //Lấy Staff theo id
    public StaffDto findStaffById(int id);

    //Tạo mới một Staff
    public StaffDto createStaff(StaffDto staffDto);

    //Cập nhật một Staff
    public StaffDto updateStaff(int id , StaffDto staffDto);

    public Page<StaffDto> getAllStaff(Pageable pageable);
}
