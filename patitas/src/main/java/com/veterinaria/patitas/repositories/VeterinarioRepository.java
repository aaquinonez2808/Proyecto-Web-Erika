package com.veterinaria.patitas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.veterinaria.patitas.models.entities.Veterinario;

public interface VeterinarioRepository extends JpaRepository<Veterinario, Long>{
    
}
