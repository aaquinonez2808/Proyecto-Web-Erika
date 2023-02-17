package com.veterinaria.patitas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veterinaria.patitas.models.entities.Propietario;

public interface PropietarioRepository extends JpaRepository<Propietario, Long>{
    
}
