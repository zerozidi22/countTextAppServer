package com.happyReceiver.countText.model;


import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserVo {

    public String socialId;
    public LocalDateTime createDt;
    public LocalDateTime updateDt;

}
