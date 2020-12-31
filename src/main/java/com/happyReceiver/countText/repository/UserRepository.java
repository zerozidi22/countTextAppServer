package com.happyReceiver.countText.repository;

import com.happyReceiver.countText.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


    User findBySocialId(String socialId);
}
