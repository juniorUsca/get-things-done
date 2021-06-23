package com.gtd.apijava.back.dao;

import com.gtd.apijava.back.modelo.Calendar;
import com.gtd.apijava.back.modelo.Incubadura;
import com.gtd.apijava.back.modelo.NextActions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface INextActions extends JpaRepository<NextActions,Integer> {


    List<NextActions> findByIduser_Iduser(Integer iduser);


}
