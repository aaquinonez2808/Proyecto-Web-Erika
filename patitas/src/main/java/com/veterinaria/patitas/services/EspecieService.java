package com.veterinaria.patitas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.veterinaria.patitas.models.dto.EspecieDTO;
import com.veterinaria.patitas.models.entities.Especie;
import com.veterinaria.patitas.repositories.EspecieRepository;

@Service
public class EspecieService {
    
    @Autowired
    private EspecieRepository especieRepository;


    public Especie save(Especie especie) {
        return especieRepository.save(especie);
    }

    public Optional<Especie> findById(Long id) {
        return especieRepository.findById(id);
    }

    public void delete(Especie especie) {
        especieRepository.delete(especie);
    }

    public List<Especie> findAll() {
        return especieRepository.findAll();
    }

    public Especie update(Especie especie) {
        return especieRepository.save(especie);
    }

    public EspecieDTO findByIdDTO(Long id) {
        Especie especie = especieRepository.findById(id).orElse(null);
        return especie == null ? null : new EspecieDTO(especie);
    }
}
