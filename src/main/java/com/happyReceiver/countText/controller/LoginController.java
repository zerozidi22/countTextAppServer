package com.happyReceiver.countText.controller;


import com.happyReceiver.countText.entity.User;
import com.happyReceiver.countText.model.UserVo;
import com.happyReceiver.countText.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    public LoginService loginService;

    @PostMapping("/social")
    public ResponseEntity<User> socialLogin(@RequestBody UserVo userVo){

        User rst = loginService.loginSocial(userVo);
        return new ResponseEntity<User>(rst, HttpStatus.OK);

    }

}
