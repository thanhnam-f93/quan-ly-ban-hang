package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.JwtRespone;
import com.sapo.quanlybanhang.dto.LoginForm;
import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.repository.StaffRepository;
import com.sapo.quanlybanhang.security.jwt.JwtProvider;
import com.sapo.quanlybanhang.service.StaffService;
import com.sapo.quanlybanhang.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {


    @Autowired
    StaffRepository staffRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    StaffService staffService;


    private final JwtProvider jwtProvider;
    private  final AuthenticationManager authenticationManager;

    public LoginController(JwtProvider jwtProvider, AuthenticationManager authenticationManager) {
        this.jwtProvider = jwtProvider;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity authenticateUser(@Validated @RequestBody LoginForm loginForm){
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        loginForm.getPhone(),
                        loginForm.getPassWord())
                );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        return ResponseEntity.ok(new JwtRespone(jwt, SecurityUtils.getPrincipal().getFullName()));

    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Validated @RequestBody StaffDto staffDto) {
        if (staffRepository.existsByPhone(staffDto.getPhone())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Số điện thoại đã được sử dụng");
        }

        // Create new user's account
        StaffDto dto = new StaffDto();
//       dto.set staffDto.getId(),
        dto.setFullName(staffDto.getFullName());
        dto.setPassWord(encoder.encode(staffDto.getPassWord()));
        dto.setAddress(staffDto.getAddress());
        dto.setMail(staffDto.getMail());
        dto.setPhone(staffDto.getPhone());
        dto.setDateOfBirth(staffDto.getDateOfBirth());
        dto.setStatus(staffDto.getStatus());
        dto.setCreatedDate(staffDto.getCreatedDate());
        dto.setModifiedDate(staffDto.getModifiedDate());
        dto.setCreateBy(staffDto.getCreateBy());
        dto.setModifiedBy(staffDto.getModifiedBy());
        dto.setRoleEntity(staffDto.getRoleEntity());
        return new ResponseEntity(staffService.createStaff(dto), HttpStatus.OK);
    }


}
