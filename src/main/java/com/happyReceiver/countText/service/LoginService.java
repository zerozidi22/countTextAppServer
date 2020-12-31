package com.happyReceiver.countText.service;

import com.happyReceiver.countText.entity.User;
import com.happyReceiver.countText.model.UserVo;
import com.happyReceiver.countText.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class LoginService {

    @Autowired
    public UserRepository userRepository;

    public User loginSocial(UserVo userVo){


        User rst = userRepository.findBySocialId(userVo.getSocialId());

        User user = new User();
        if(rst != null){
            rst.setUpdateDt(LocalDateTime.now());
            return userRepository.save(rst);
        }
        user.setCreateDt(LocalDateTime.now());
        user.setUpdateDt(LocalDateTime.now());
        user.setSocialId(userVo.getSocialId());
        return userRepository.save(user);


    }
}
