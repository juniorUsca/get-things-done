package com.gtd.apijava.back.dao;

import com.gtd.apijava.back.modelo.Calendar;
import com.gtd.apijava.back.modelo.Inbox;
import com.gtd.apijava.back.modelo.Incubadura;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IIncubadura extends JpaRepository<Incubadura,Integer> {


    List<Incubadura> findByIduser_Iduser(Integer iduser);


}
