package com.veterinaria.patitas.models.entities;

import jakarta.persistence.Table;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "mascota")
@Data @AllArgsConstructor @NoArgsConstructor
public class Mascota {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String raza;
    private String sexo;
    private String fechaNacimiento;

    @OneToMany(mappedBy = "mascota" , fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Tratamiento> tratamientos;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "especie_id", nullable = false)
    private Especie especie;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "propietario_id", nullable = false )
    private Propietario propietario;


    public Mascota(Long id, String nombre, String raza, String sexo,
        String fechaNacimiento, Especie especie, Propietario propietario) {
        this.id = id;
        this.nombre = nombre;
        this.raza = raza;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.especie = especie;
        this.propietario = propietario;
    }



}
