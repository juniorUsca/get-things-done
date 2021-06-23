package com.gtd.apijava.back.dao;

import com.gtd.apijava.back.modelo.Calendar;
import com.gtd.apijava.back.modelo.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICalendar extends JpaRepository<Calendar,Integer> {


    List<Calendar> findByIduser_Iduser(Integer iduser);


}
