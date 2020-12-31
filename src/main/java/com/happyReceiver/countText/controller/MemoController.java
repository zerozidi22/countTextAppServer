package com.happyReceiver.countText.controller;


import com.happyReceiver.countText.entity.Memo;
import com.happyReceiver.countText.entity.User;
import com.happyReceiver.countText.service.MemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/memo")
public class MemoController {

    @Autowired
    public MemoService memoService;

    @GetMapping("/{socialId}/{id}")
    public ResponseEntity<Memo> getMemoData(@PathVariable("socialId") String socialId, @PathVariable("id") Long id){
        Memo rst = memoService.getMemoDataDetail(socialId, id);
        return new ResponseEntity<>(rst, HttpStatus.OK);
    }

    @GetMapping("/list/{socialId}")
    public ResponseEntity<List<Memo>> getMemoListData(@PathVariable("socialId") String socialId){
        List<Memo> dataList = memoService.getMemoDataList(socialId);
        return new ResponseEntity<>(dataList, HttpStatus.OK);
    }

    @PostMapping("/insert")
    public ResponseEntity<Memo> insertMemoData(@RequestBody Memo memo){
        Memo rst = memoService.insertMemoData(memo);
        return new ResponseEntity<>(rst, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Memo> updateMemoData(@RequestBody Memo memo){

        Memo rst = memoService.updateMemoData(memo);
        return new ResponseEntity<>(rst, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{socialId}/{id}")
    public ResponseEntity<Memo> deleteMemeData(@PathVariable("socialId") String socialId, @PathVariable("id") Long id){
        Memo rst = memoService.deleteMemeData(socialId, id);
        return new ResponseEntity<>(rst, HttpStatus.OK);
    }



}
