package com.veterinaria.patitas.models.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.veterinaria.patitas.models.entities.Especie;

@Data @AllArgsConstructor @NoArgsConstructor
public class EspecieDTO {

    private Long id;
    private String nombre;
    private String descripcion;

    public EspecieDTO(Especie especie) {
        this.id = especie.getId();
        this.nombre = especie.getNombre();
        this.descripcion = especie.getDescripcion();
    }
    
}