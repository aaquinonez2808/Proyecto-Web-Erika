package com.veterinaria.patitas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.veterinaria.patitas.models.dto.TratamientoDTO;
import com.veterinaria.patitas.models.entities.Tratamiento;
import com.veterinaria.patitas.repositories.TratamientoRepository;

@Service
public class TratamientoService {
    
    @Autowired
    private TratamientoRepository tratamientoRepository;

    public Tratamiento save(Tratamiento tratamiento) {
        return tratamientoRepository.save(tratamiento);
    }

    public Optional<Tratamiento> findById(Long id) {
        Optional<Tratamiento> tratamiento = tratamientoRepository.findById(id);
        return tratamiento;
    }

    public void delete(Tratamiento tratamiento) {
        tratamientoRepository.delete(tratamiento);
    }

    public List<Tratamiento> findAll() {
        return tratamientoRepository.findAll();
    }

    public Tratamiento update(Tratamiento tratamiento) {
        return tratamientoRepository.save(tratamiento);
    }

    public TratamientoDTO findByIdDTO(Long id) {
        Tratamiento tratamiento = tratamientoRepository.findById(id).orElse(null);
        return tratamiento == null ? null : new TratamientoDTO(tratamiento);
    }

    
}
