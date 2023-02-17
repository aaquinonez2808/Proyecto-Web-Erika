package com.veterinaria.patitas.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.veterinaria.patitas.services.VeterinarioService;
import com.veterinaria.patitas.models.entities.Veterinario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;



@RestController
@RequestMapping("/api/veterinario")
public class VeterinarioController {

    @Autowired(required = true)
    private VeterinarioService veterinarioService;


    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody Veterinario veterinario) {
        Veterinario veterinarioGuardado = veterinarioService.save(veterinario);
        //Crear un objeto para retornar el estado, el mensaje y el objeto guardado
        return ResponseEntity.status(201).body(veterinarioGuardado);
    }

    @PutMapping("/update/{id}")
    private ResponseEntity<?> update(@RequestBody Veterinario veterinario, @PathVariable Long id) {
        Veterinario veterinarioBuscado = veterinarioService.findById(id).get();
        if (veterinarioBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        veterinario.setId(veterinarioBuscado.getId());
        veterinarioService.save(veterinario);
        return ResponseEntity.ok(veterinario);
    }

    @GetMapping("/list")
    private ResponseEntity<?> list() {
        List<Veterinario> veterinarios = veterinarioService.findAll();
        if (veterinarios.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(veterinarios);
    }

    @GetMapping("/find/{id}")
    private ResponseEntity<?> findById(@PathVariable Long id) {
        Veterinario veterinario = veterinarioService.findById(id).get();
        if (veterinario == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(veterinario);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id) {
        Veterinario veterinario = veterinarioService.findById(id).get();
        if (veterinario == null) {
            return ResponseEntity.notFound().build();
        }
        veterinarioService.delete(veterinario);
        return ResponseEntity.ok(veterinario);
    }
    
}
