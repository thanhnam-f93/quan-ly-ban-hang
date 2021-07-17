package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashBoardItem   {
   private Date createdDate;
   private Long price;

}
