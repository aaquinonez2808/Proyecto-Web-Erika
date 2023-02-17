package com.veterinaria.patitas.models.dto;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import com.veterinaria.patitas.models.entities.Propietario;

@Data @AllArgsConstructor @NoArgsConstructor
public class PropietarioDTO {
    private Long id;
    private String nombre;
    private String cedula;
    private String telefono;
    private String direccion;
    private String email;
    
    public PropietarioDTO(Propietario cliente) {
        this.id = cliente.getId();
        this.nombre = cliente.getNombre();
        this.cedula = cliente.getCedula();
        this.telefono = cliente.getTelefono();
        this.direccion = cliente.getDireccion();
        this.email = cliente.getEmail();
    }
}
