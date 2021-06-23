package com.gtd.apijava.back.dao;

import com.gtd.apijava.back.modelo.NextActions;
import com.gtd.apijava.back.modelo.TicklerFile;
import com.gtd.apijava.back.modelo.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ITicklerFile extends JpaRepository<TicklerFile,Integer> {


    List<ITicklerFile> findByIduser_Iduser(Integer iduser);


}
