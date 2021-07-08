package com.sapo.quanlybanhang.security;

import com.sapo.quanlybanhang.dto.MyUser;
import com.sapo.quanlybanhang.entity.RoleEntity;
import com.sapo.quanlybanhang.entity.StaffEntity;
import com.sapo.quanlybanhang.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private StaffRepository staffRepository;
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        StaffEntity staffEntity = staffRepository.findOneByPhone(s);
        if(staffEntity==null){
            throw  new UsernameNotFoundException("user not found");
        }
            List<GrantedAuthority> authorities = new ArrayList();
        for(RoleEntity item : staffEntity.getRoles()){
            authorities.add(new SimpleGrantedAuthority(item.getCode()));
        }
        MyUser myUser = new MyUser(staffEntity.getPhone(), staffEntity.getPassWord(),
                true, true, true, true, authorities);
        myUser.setFullName(staffEntity.getFullName());
        return myUser;

    }
}