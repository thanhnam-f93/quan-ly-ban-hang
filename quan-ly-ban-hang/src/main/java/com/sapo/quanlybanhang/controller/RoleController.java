package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.RoleDto;
import com.sapo.quanlybanhang.service.RoleService;
import org.springframework.http.HttpStatus;
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
    @GetMapping("/roles")
    public ResponseEntity getAllRoles() {
        List<RoleDto> list = roleService.findAll();
        ResponseEntity responseEntity = new ResponseEntity<>(list, HttpStatus.OK);
        return responseEntity;
    }

    //Thêm mới 1 Role
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
