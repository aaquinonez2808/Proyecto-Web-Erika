package com.veterinaria.patitas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veterinaria.patitas.models.entities.Mascota;

public interface MascotaRepository extends JpaRepository<Mascota, Long>{
    
}
