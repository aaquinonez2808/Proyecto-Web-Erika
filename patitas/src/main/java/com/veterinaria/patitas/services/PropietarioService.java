package com.veterinaria.patitas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.veterinaria.patitas.models.entities.Propietario;
import com.veterinaria.patitas.repositories.PropietarioRepository;

@Service
public class PropietarioService {
    
    @Autowired
    private PropietarioRepository propietarioRepository;

    public Propietario save(Propietario propietario) {
        return propietarioRepository.save(propietario);
    }

    public Optional<Propietario> findById(Long id) {
        return propietarioRepository.findById(id);
    }

    public void delete(Long id) {

        propietarioRepository.deleteById(id);
    }

    public List<Propietario> findAll() {
        return propietarioRepository.findAll();
    }

    public Propietario update(Propietario propietario) {
        return propietarioRepository.save(propietario);
    }
    
}
