package com.veterinaria.patitas.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.veterinaria.patitas.services.EspecieService;
import com.veterinaria.patitas.models.entities.Especie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;



@RestController
@RequestMapping("/api/especie")
public class EspecieController {

    @Autowired(required = true)
    private EspecieService especieService;


    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody Especie especie) {
        Especie especieGuardado = especieService.save(especie);
        //Crear un objeto para retornar el estado, el mensaje y el objeto guardado
        return ResponseEntity.status(201).body(especieGuardado);
    }

    @PutMapping("/update/{id}")
    private ResponseEntity<?> update(@RequestBody Especie especie, @PathVariable Long id) {
        Especie especieBuscado = especieService.findById(id).get();
        if (especieBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        especie.setId(especieBuscado.getId());
        especieService.save(especie);
        return ResponseEntity.ok(especie);
    }

    @GetMapping("/list")
    private ResponseEntity<?> list() {
        List<Especie> especies = especieService.findAll();
        if (especies.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(especies);
    }

    @GetMapping("/find/{id}")
    private ResponseEntity<?> findById(@PathVariable Long id) {
        Especie especie = especieService.findById(id).get();
        if (especie == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(especie);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id) {
        Especie especie = especieService.findById(id).get();
        if (especie == null) {
            return ResponseEntity.notFound().build();
        }
        especieService.delete(especie);
        return ResponseEntity.ok(especie);
    }
    
}
