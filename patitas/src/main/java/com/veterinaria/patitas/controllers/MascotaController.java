package com.veterinaria.patitas.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.veterinaria.patitas.services.MascotaService;
import com.veterinaria.patitas.models.entities.Mascota;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;



@RestController
@RequestMapping("/api/mascota")
public class MascotaController {

    @Autowired(required = true)
    private MascotaService mascotaService;


    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody Mascota mascota) {
        Mascota mascotaGuardado = mascotaService.save(mascota);
        //Crear un objeto para retornar el estado, el mensaje y el objeto guardado
        return ResponseEntity.status(201).body(mascotaGuardado);
    }

    @PutMapping("/update/{id}")
    private ResponseEntity<?> update(@RequestBody Mascota mascota, @PathVariable Long id) {
        Mascota mascotaBuscado = mascotaService.findById(id).get();
        if (mascotaBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        mascota.setId(mascotaBuscado.getId());
        mascotaService.save(mascota);
        return ResponseEntity.ok(mascota);
    }

    @GetMapping("/list")
    private ResponseEntity<?> list() {
        List<Mascota> mascotas = mascotaService.findAll();
        for (Mascota mascota : mascotas) {
            System.out.println(mascota.getNombre());
        }
        if (mascotas.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(mascotas);
    }

    @GetMapping("/find/{id}")
    private ResponseEntity<?> findById(@PathVariable Long id) {
        Mascota mascota = mascotaService.findById(id).get();
        if (mascota == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mascota);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id) {
        Mascota mascota = mascotaService.findById(id).get();
        if (mascota == null) {
            return ResponseEntity.notFound().build();
        }
        mascotaService.delete(mascota);
        return ResponseEntity.ok(mascota);
    }
    
}
