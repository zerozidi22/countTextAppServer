package com.happyReceiver.countText.service;


import com.happyReceiver.countText.entity.Memo;
import com.happyReceiver.countText.repository.MemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MemoService {


    @Autowired
    public MemoRepository memoRepository;

    public List<Memo> getMemoDataList(String socialId){
        return memoRepository.findAllBySocialIdAndUseYn(socialId, "Y");
    }

    public Memo getMemoDataDetail(String socialId, Long id){
        return memoRepository.findByIdAndSocialId(id, socialId);
    }

    public Memo insertMemoData(Memo memo){
        memo.setCreateDt(LocalDateTime.now());
        memo.setUpdateDt(LocalDateTime.now());
        memo.setUseYn("Y");
        return memoRepository.save(memo);
    }

    public Memo updateMemoData(Memo memo){


        Optional<Memo> rst = Optional.ofNullable(memoRepository.findByIdAndSocialId(memo.getId(), memo.getSocialId()));
        rst.get().setText(memo.getText());
        rst.get().setUpdateDt(LocalDateTime.now());

        return memoRepository.save(rst.get());
    }

    public Memo deleteMemeData(String socialId, Long id){
        Optional<Memo> rst = Optional.ofNullable(memoRepository.findByIdAndSocialId(id, socialId));
        rst.get().setUseYn("N");
        rst.get().setUpdateDt(LocalDateTime.now());
        return memoRepository.save(rst.get());
    }


}
