package com.sapo.quanlybanhang.controller;


import com.sapo.quanlybanhang.converter.CustomerConvert;
import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;
import com.sapo.quanlybanhang.service.CustomerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/")
public class CustomerController {
    private final CustomerService customerService;
    Logger logger = LoggerFactory.getLogger(CustomerController.class);

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }
    @GetMapping("customers/page")
    ResponseEntity<?> allPage(
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name= "limit",defaultValue = "5") String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<CustomerDto> dtoPage = customerService.getPage(pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
        return null;
    }

    @GetMapping("customers/search")
    ResponseEntity<?> search(
            @RequestParam(name = "input") String input,
            @RequestParam(name = "pageNo", defaultValue = "0",required = false) String pageNo,
@RequestParam(name= "limit",defaultValue = "5",required = false) String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<CustomerDto> dtoPage = customerService.search(input, pageRequest);
            if (dtoPage!=null) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }else {
                return new ResponseEntity<>("Khách hàng cần tìm không tồn tại", new HttpHeaders(), HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
    }

    @GetMapping("customers/findGender")
    ResponseEntity<?> findGender(
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "gender") String gender,
            @RequestParam(name= "limit",defaultValue = "5",required = false) String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<CustomerDto> dtoPage = customerService.findByGender(gender, pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Không có dữ liễu", new HttpHeaders(), HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Lỗi truy vấn dữ liệu");
        }

    }

    @GetMapping("customers/findAddress")
    ResponseEntity<?> findAddress(
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "address") String input,
             @RequestParam(name= "limit",defaultValue = "5",required = false) String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<CustomerDto> dtoPage = customerService.findByAddress(input, pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
        return null;
    }

    @GetMapping("customers/findStaff")
    ResponseEntity<?> findStaff(
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "input") String input,
            @RequestParam(name= "limit",defaultValue = "5",required = false) String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<CustomerDto> dtoPage = customerService.findByStaff(input, pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
        return null;
    }

    @GetMapping("customers/under")
    ResponseEntity<?> under18(
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name= "gender",required = false) String gender,
            @RequestParam(name= "limit",defaultValue = "5",required = false) String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<CustomerDto> dtoPage=null;
            if(gender==null){
                 dtoPage = customerService.findAgeUnder18(pageRequest);
            }else {
                dtoPage = customerService.findAgeUnder18optionGender(gender,pageRequest);
            }
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Không có dữ liệu", new HttpHeaders(), HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Lỗi truy vấn dữ liệu");
        }

    }

    @GetMapping("customers/between")
    ResponseEntity<?> between(
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name= "gender",required = false) String gender,
            @RequestParam(name= "limit",defaultValue = "5",required = false) String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<CustomerDto> dtoPage=null;
            if(gender==null){
                dtoPage = customerService.findByAgeBetween18and35(pageRequest);
            }else {
                dtoPage = customerService.findByAgeBetween18and35optionGender(gender,pageRequest);
            }
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Không có dữ liệu", new HttpHeaders(), HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("lỗi truy vấn dữ liệu");
        }

    }

    @GetMapping("customers/over")
    ResponseEntity<?> over35(
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name= "gender",required = false) String gender,
            @RequestParam(name= "limit",defaultValue = "5",required = false) String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<CustomerDto> dtoPage=null;
            if(gender==null){
                dtoPage = customerService.findByAgeOver35(pageRequest);
            }else {
                dtoPage = customerService.findByAgeOver35optionGender(gender,pageRequest);
            }
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Không có dữ liệu", new HttpHeaders(), HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Lỗi truy vấn dữ liệu");
        }

    }

    @GetMapping("customers/{id}")
    ResponseEntity<?> getById(@PathVariable("id") Integer id) {
        try {
            CustomerDto customerDto = customerService.findById(id);
            if (customerDto != null) {
                return new ResponseEntity<>(customerDto, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Khách hàng không tồn tại");
        }

        return null;
    }

    @GetMapping("customers")
    ResponseEntity<?> getAll(){
        List<CustomerDto> customerDtoList = customerService.getAll();
        if(customerDtoList!=null){
            return new ResponseEntity<>(customerDtoList,new HttpHeaders(),HttpStatus.OK);
        }
        return ResponseEntity.badRequest().body("Khách hàng không tồn tại");
    }
    @GetMapping("customers/count")
    ResponseEntity<?> count(@RequestParam("year") Integer year){
        try{
            List<Integer> listNewNumberOfCustomer = new ArrayList<>();
            for (int i = 1; i <=12 ; i++) {
                listNewNumberOfCustomer.add(customerService.countCustomersByMonth(i,year));
            }
            return new ResponseEntity<List<Integer>>(listNewNumberOfCustomer,HttpStatus.OK);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Lỗi truy vấn dữ liệu");
        }
    }
    @GetMapping("customers/count2")
    ResponseEntity<?> count(@RequestParam("year") Integer year,@RequestParam("month") Integer month){
        try{
            List<Integer> listNewNumberOfCustomer = new ArrayList<>();
            for (int i = 1; i <=31 ; i++) {
                listNewNumberOfCustomer.add(customerService.countCustomersByDay(i,month,year));
            }
            return new ResponseEntity<List<Integer>>(listNewNumberOfCustomer,HttpStatus.OK);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Lỗi truy vấn dữ liệu");
        }
    }
    @GetMapping("customers/statistics")
    ResponseEntity<Page<Object[]>> statisticsByTime(  @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
                                                      @RequestParam(name= "limit",defaultValue = "5",required = false) String limit){
        try{
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<Object[]> list = customerService.getStatistics(pageRequest);
            return new ResponseEntity<>(list,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<Page<Object[]>>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("customers/getYearCreateCustomer")
    ResponseEntity<List<Integer>> getYearCreateCustomer(){
        try{
            List<Integer> listYear = customerService.getYearCreateCustomer();
            return new ResponseEntity<>(listYear,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<List<Integer>>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("customers")
    ResponseEntity<?> save(@Valid @RequestBody CustomerDto customerDto ) {
        try {
            if(customerDto!=null){
                customerService.save(customerDto);
                return ResponseEntity.ok().body("Thêm mới thành công");
            }else{
                return new ResponseEntity<>("Không có dữ liệu",HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            return new ResponseEntity<>("Thêm mới thất bại, kiểm tra lại tính hợp lệ của dữ liệu",HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("customers/{id}")
    ResponseEntity<?> update(@Valid @RequestBody CustomerDto customerDto, @PathVariable("id") Integer id) {

        try {
            CustomerEntity root = CustomerConvert.toEntity(customerService.findById(id));
            if(root!=null){
                root.setModifiedDate(customerDto.getModifiedDate());
                root.setModifiedBy(customerDto.getModifiedBy());
                root.setCreatedDate(customerDto.getCreatedDate());
                root.setCreateBy(customerDto.getCreateBy());
                root.setEmail(customerDto.getEmail());
                root.setName(customerDto.getName());
                root.setGender(customerDto.getGender());
                root.setNote(customerDto.getNote());
                root.setPhone(customerDto.getPhone());
                root.setDateOfBirth(customerDto.getDateOfBirth());
                root.setStatus(customerDto.getStatus());
                customerService.save(CustomerConvert.toDTO(root));
                return ResponseEntity.ok().body("Cập nhập thành công");
            }else{
                return new ResponseEntity<>("Không có dữ liệu",HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            logger.error("Error: "+e);
            return new ResponseEntity<>("Lỗi:  "+e,HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("customers/off/{id}")
    ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        CustomerDto root = customerService.findById(id);
        if (id != null) {
            customerService.delete(id);
            return ResponseEntity.ok().body("Thay đổi trạng thái thành công !");
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
