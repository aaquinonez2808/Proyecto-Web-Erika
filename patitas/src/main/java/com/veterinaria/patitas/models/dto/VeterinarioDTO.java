package com.veterinaria.patitas.models.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.veterinaria.patitas.models.entities.Veterinario;

@Data @AllArgsConstructor @NoArgsConstructor
public class VeterinarioDTO {
    private Long id;
    private String nombre;
    private String cedula;
    private String telefono;
    private String direccion;
    private String email;
    
    public VeterinarioDTO(Veterinario veterinario) {
        this.id = veterinario.getId();
        this.nombre = veterinario.getNombre();
        this.cedula = veterinario.getCedula();
        this.telefono = veterinario.getTelefono();
        this.direccion = veterinario.getDireccion();
        this.email = veterinario.getEmail();
    }
}
