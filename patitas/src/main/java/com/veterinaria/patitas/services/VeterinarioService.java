package com.veterinaria.patitas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.veterinaria.patitas.models.entities.Veterinario;
import com.veterinaria.patitas.repositories.VeterinarioRepository;

@Service
public class VeterinarioService {
    
    @Autowired
    private VeterinarioRepository veterinarioRepository;

    public Veterinario save(Veterinario veterinario) {
        return veterinarioRepository.save(veterinario);
    }

    public Optional<Veterinario> findById(Long id) {
        return veterinarioRepository.findById(id);
    }

    public void delete(Veterinario veterinario) {
        veterinarioRepository.delete(veterinario);
    }

    public List<Veterinario> findAll() {
        return veterinarioRepository.findAll();
    }

    public Veterinario update(Veterinario veterinario) {
        return veterinarioRepository.save(veterinario);
    }
    
}
