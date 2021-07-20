package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.RoleDto;
import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.service.RoleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
<<<<<<< HEAD
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
=======
>>>>>>> 5ad64b351baefbc1005c39f6d27b0018211f5d79
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class RoleController {
    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    //Lấy danh sách roles
<<<<<<< HEAD
    @PreAuthorize("hasAuthority('VIEW_STAFF')")
    @GetMapping("/listRoles")
    public ResponseEntity getAllRoles(){
     List<RoleDto> list = roleService.findAll();
     ResponseEntity responseEntity = new ResponseEntity<>(list , HttpStatus.OK);
=======
    @GetMapping("/roles")
    public ResponseEntity getAllRoles() {
        List<RoleDto> list = roleService.findAll();
        ResponseEntity responseEntity = new ResponseEntity<>(list, HttpStatus.OK);
>>>>>>> 5ad64b351baefbc1005c39f6d27b0018211f5d79
        return responseEntity;
    }

    //Phân trang danh sách roles
    @PreAuthorize("hasAuthority('VIEW_ROLE')")
    @GetMapping("/roles")
    Page<RoleDto> getRole(
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name = "limit", defaultValue = "7") Integer limit,
            @RequestParam(name = "sortBy", defaultValue = "id") String sortBy
    ){
        PageRequest pageResult = PageRequest.of(page,limit, Sort.by(sortBy).descending());
        Page<RoleDto> roleDtoPage = roleService.getAllRole(pageResult);
        return roleDtoPage;
    }

    //Thêm mới 1 Role
    @PreAuthorize("hasAuthority('CREATE_ROLE')")
    @PostMapping("/roles")
    public ResponseEntity createRole(@RequestBody RoleDto roleDto) {
        RoleDto dto = roleService.createRole(roleDto);
        return new ResponseEntity(dto, HttpStatus.OK);
    }

    //Cập nhật 1 Role
    @PutMapping("/roles/{id}")
    public ResponseEntity updateRole(@PathVariable("id") int id, @Valid @RequestBody RoleDto roleDto) {
        RoleDto dto = roleService.updateRole(id, roleDto);
        return new ResponseEntity(dto, HttpStatus.OK);
    }
}
