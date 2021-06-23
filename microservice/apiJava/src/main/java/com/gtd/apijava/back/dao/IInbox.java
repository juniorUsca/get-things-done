package com.gtd.apijava.back.dao;

import com.gtd.apijava.back.modelo.Calendar;
import com.gtd.apijava.back.modelo.Inbox;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IInbox extends JpaRepository<Inbox,Integer> {


    List<Inbox> findByIduser_Iduser(Integer iduser);


}
