package com.gtd.apijava.back.modelo;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name="incubadura")
public class Incubadura implements Serializable {

    @Id
    private Integer idincubadora;

    @JoinColumn(name = "iduser", referencedColumnName = "iduser")
    @ManyToOne(fetch = FetchType.EAGER)
    private Users iduser;

    @Column(name = "category")
    private String category;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "deadline")
    @Temporal(TemporalType.TIMESTAMP)
    private Date deadline;

    @Column(name = "difficult_level")
    private String difficult_level;

    @Column(name = "status_done")
    private String status_done;

    @Column(name = "created_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    @Column(name = "update_at")
    @Temporal(TemporalType.TIMESTAMP)
    private Date update_at;

    public Incubadura() {
    }

    public Integer getIdincubadora() {
        return idincubadora;
    }

    public void setIdincubadora(Integer idincubadora) {
        this.idincubadora = idincubadora;
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

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getDifficult_level() {
        return difficult_level;
    }

    public void setDifficult_level(String difficult_level) {
        this.difficult_level = difficult_level;
    }

    public String getStatus_done() {
        return status_done;
    }

    public void setStatus_done(String status_done) {
        this.status_done = status_done;
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
        Incubadura that = (Incubadura) o;
        return idincubadora.equals(that.idincubadora);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idincubadora);
    }
}
