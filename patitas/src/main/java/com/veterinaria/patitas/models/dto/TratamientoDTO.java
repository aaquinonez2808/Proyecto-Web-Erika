package com.veterinaria.patitas.models.dto;

import com.veterinaria.patitas.models.entities.Mascota;
import com.veterinaria.patitas.models.entities.Tratamiento;
import com.veterinaria.patitas.models.entities.Veterinario;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class TratamientoDTO {
    
    private Long id;
    private String nombre;
    private String descripcion;
    private String fecha;
    private String observaciones;
    private String estado;
    private MascotaDTO mascota;
    private VeterinarioDTO veterinario;
    


    public TratamientoDTO(Tratamiento tratamiento) {
        this.id = tratamiento.getId();
        this.nombre = tratamiento.getNombre();
        this.descripcion = tratamiento.getDescripcion();
        this.fecha =   tratamiento.getFecha();
        this.observaciones = tratamiento.getObservaciones();
        this.estado = tratamiento.getEstado();
        this.mascota = new MascotaDTO(tratamiento.getMascota());
        this.veterinario = new VeterinarioDTO(tratamiento.getVeterinario());
    }

    public Mascota toMascota(){
        Mascota mascota = new Mascota();
        mascota.setId(this.mascota.getId());
        mascota.setNombre(this.mascota.getNombre());
        mascota.setRaza(this.mascota.getRaza());
        mascota.setFechaNacimiento(this.mascota.getFechaNacimiento());
        mascota.setSexo(this.mascota.getSexo());
        mascota.setEspecie(this.mascota.toEspecie());
        mascota.setPropietario(this.mascota.toPropietario());
        return mascota;
    }

    public Veterinario toVeterinario(){
        Veterinario veterinario = new Veterinario();
        veterinario.setId(this.veterinario.getId());
        veterinario.setNombre(this.veterinario.getNombre());
        veterinario.setCedula(this.veterinario.getCedula());
        veterinario.setTelefono(this.veterinario.getTelefono());
        veterinario.setDireccion(this.veterinario.getDireccion());
        veterinario.setEmail(this.veterinario.getEmail());
        return veterinario;
    }

}