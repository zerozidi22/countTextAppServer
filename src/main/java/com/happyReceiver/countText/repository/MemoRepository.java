package com.happyReceiver.countText.repository;

import com.happyReceiver.countText.entity.Memo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemoRepository extends JpaRepository<Memo, Long> {



    List<Memo> findAllBySocialIdAndUseYn(String socialId, String useYn);
    Memo findByIdAndSocialId(Long id , String socialId);

}
