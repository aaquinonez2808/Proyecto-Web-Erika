package com.veterinaria.patitas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.veterinaria.patitas.models.dto.MascotaDTO;
import com.veterinaria.patitas.models.entities.Mascota;
import com.veterinaria.patitas.repositories.MascotaRepository;

@Service
public class MascotaService {
    
    @Autowired
    private MascotaRepository mascotaRepository;

    public Mascota save(Mascota mascota) {
        return mascotaRepository.save(mascota);
    }

    public Optional<Mascota> findById(Long id) {
        return mascotaRepository.findById(id);
    }

    public void delete(Mascota mascota) {
        mascotaRepository.delete(mascota);
    }

    public List<Mascota> findAll() {
        return mascotaRepository.findAll();
    }

    public Mascota update(Mascota mascota) {
        return mascotaRepository.save(mascota);
    }
    
    public MascotaDTO findByIdDTO(Long id) {
        Mascota mascota = mascotaRepository.findById(id).orElse(null);
        return mascota == null ? null : new MascotaDTO(mascota);
    }

}
