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
@Table(name = "veterinario")
@Data @AllArgsConstructor @NoArgsConstructor
public class Veterinario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private String cedula;
    private String telefono;
    private String direccion;

    @OneToMany(mappedBy = "veterinario" , fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Tratamiento> tratamientos;

    public Veterinario(Long id, String nombre, String email, String cedula, String telefono, String direccion) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.cedula = cedula;
        this.telefono = telefono;
        this.direccion = direccion;
    }


    
    
    
}
