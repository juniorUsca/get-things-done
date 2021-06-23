package com.gtd.apijava.back.dao;

import com.gtd.apijava.back.modelo.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IUsers extends JpaRepository<Users,Integer> {


    List<Users> findAllByOrderByName();


}
