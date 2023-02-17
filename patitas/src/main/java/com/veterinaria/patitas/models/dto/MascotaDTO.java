package com.veterinaria.patitas.models.dto;

import com.veterinaria.patitas.models.entities.Especie;
import com.veterinaria.patitas.models.entities.Mascota;
import com.veterinaria.patitas.models.entities.Propietario;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class MascotaDTO {
    private Long id;
    private String nombre;
    private String raza;
    private String sexo;
    private String fechaNacimiento;
    private PropietarioDTO propietario;
    private EspecieDTO especie;

    public MascotaDTO (Mascota mascota){
        this.id = mascota.getId();
        this.raza = mascota.getRaza();
        this.sexo = mascota.getSexo();
        this.fechaNacimiento = mascota.getFechaNacimiento();
        this.especie = new EspecieDTO(mascota.getEspecie());
        this.propietario = new PropietarioDTO(mascota.getPropietario());
    }


    public Especie toEspecie(){
        Especie especie = new Especie();
        especie.setId(this.especie.getId());
        especie.setNombre(this.especie.getNombre());
        especie.setDescripcion(this.especie.getDescripcion());
        return especie;
    }

    public Propietario toPropietario(){
        Propietario propietario = new Propietario();
        propietario.setId(this.propietario.getId());
        propietario.setNombre(this.propietario.getNombre());
        propietario.setCedula(this.propietario.getCedula());
        propietario.setTelefono(this.propietario.getTelefono());
        propietario.setDireccion(this.propietario.getDireccion());
        propietario.setEmail(this.propietario.getEmail());
        return propietario;
    }
}
