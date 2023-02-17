package com.veterinaria.patitas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veterinaria.patitas.models.entities.Especie;

public interface EspecieRepository extends JpaRepository<Especie, Long>{
    
}
