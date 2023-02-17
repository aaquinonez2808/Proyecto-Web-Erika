package com.veterinaria.patitas.models.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "propietario")
@Data @AllArgsConstructor @NoArgsConstructor
public class Propietario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    private String cedula;
    private String direccion;
    private String telefono;
    private String email;

    

    public Propietario(Long id, String nombre, String cedula, String direccion, String telefono, String email) {
        this.id = id;
        this.nombre = nombre;
        this.cedula = cedula;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }



    @OneToMany(mappedBy = "propietario" , fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Mascota> mascotas;
}