package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.dto.DashBoarDto;
import com.sapo.quanlybanhang.dto.DashBoardItem;
import com.sapo.quanlybanhang.dto.OrderItem;
import com.sapo.quanlybanhang.dto.enums.OptionTime;
import com.sapo.quanlybanhang.repository.BillRepository;
import com.sapo.quanlybanhang.repository.OrderRepository;
import com.sapo.quanlybanhang.service.IDashBoardService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class DashBoardService implements IDashBoardService {
    Logger logger = LoggerFactory.getLogger(DashBoardService.class);
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private BillRepository billRepository;
    @Override
    public DashBoarDto collectOrder(DashBoarDto dto) {
        LocalDate thisDay = LocalDate.now();
        DashBoardItem dashBoardItem = new DashBoardItem();
        OrderItem priceOrder = orderRepository.findPrice(dto.getOptionDate());
        OrderItem priceBill = billRepository.findPrice(dto.getOptionDate());
        OptionTime option =dto.getOptionTime();
        logger.info("price order:"+priceOrder);
        logger.info("price bill:"+priceBill);
        Long price = priceOrder.getPriceOrder()-priceBill.getPriceOrder();
        dto.setPrice(price);
        dto.setBillNumber(priceBill.getCountOrder().intValue());
        dto.setOrderNumber(priceOrder.getCountOrder().intValue());

        switch (option){
            case TODAY:
                dashBoardItem.setDashBoarchDate(thisDay);
                dashBoardItem.setPrice(price);
                dto.getDashBoardItems().add(dashBoardItem);
                break;
            case THIS_WEEK:
                break;
            case YESTERDAY:

                dashBoardItem.setDashBoarchDate(thisDay.minusDays(1));
                dto.getDashBoardItems().add(dashBoardItem);
                break;
            case LAST_MONTH:
                break;
            case THIS_MONTH:
                break;
            default:
                break;
        }
        logger.info("dashboard:"+dto);
        return null;
    }
}
