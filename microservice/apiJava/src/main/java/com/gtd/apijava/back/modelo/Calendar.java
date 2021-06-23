package com.gtd.apijava.back.modelo;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name="calendar")
public class Calendar implements Serializable {

    @Id
    private Integer idcalendar;

    @JoinColumn(name = "iduser", referencedColumnName = "iduser")
    @ManyToOne(fetch = FetchType.EAGER)
    private Users iduser;

    @Column(name = "category")
    private String category;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @Column(name = "start_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Date start_time;

    @Column(name = "final_time")
    @Temporal(TemporalType.TIMESTAMP)
    private Date final_time;


    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    @Column(name = "update_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date update_at;

    public Calendar() {
    }

    public Integer getIdcalendar() {
        return idcalendar;
    }

    public void setIdcalendar(Integer idcalendar) {
        this.idcalendar = idcalendar;
    }

    public Users getIduser() {
        return iduser;
    }

    public void setIduser(Users iduser) {
        this.iduser = iduser;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getStart_time() {
        return start_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public Date getFinal_time() {
        return final_time;
    }

    public void setFinal_time(Date final_time) {
        this.final_time = final_time;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(Date update_at) {
        this.update_at = update_at;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Calendar calendar = (Calendar) o;
        return idcalendar.equals(calendar.idcalendar);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idcalendar);
    }
}
