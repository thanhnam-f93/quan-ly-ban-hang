package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.sql.Timestamp;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashBoardItem  implements Serializable  {
   private Timestamp createdDate;
   private Long price;

}
