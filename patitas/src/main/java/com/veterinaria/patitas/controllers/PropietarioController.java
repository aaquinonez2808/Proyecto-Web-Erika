package com.veterinaria.patitas.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.veterinaria.patitas.services.PropietarioService;
import com.veterinaria.patitas.models.entities.Propietario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;



@RestController
@RequestMapping("/api/propietario")
public class PropietarioController {

    @Autowired(required = true)
    private PropietarioService propietarioService;


    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody Propietario propietario) {
        Propietario propietarioGuardado = propietarioService.save(propietario);
        //Crear un objeto para retornar el estado, el mensaje y el objeto guardado
        return ResponseEntity.status(201).body(propietarioGuardado);
    }

    @PutMapping("/update/{id}")
    private ResponseEntity<?> update(@RequestBody Propietario propietario, @PathVariable Long id) {
        Propietario propietarioBuscado = propietarioService.findById(id).get();
        if (propietarioBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        propietario.setId(propietarioBuscado.getId());
        propietarioService.save(propietario);
        return ResponseEntity.ok(propietario);
    }

    @GetMapping("/list")
    private ResponseEntity<?> list() {
        List<Propietario> propietarios = propietarioService.findAll();
        if (propietarios.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(propietarios);
    }

    @GetMapping("/find/{id}")
    private ResponseEntity<?> findById(@PathVariable Long id) {
        Propietario propietario = propietarioService.findById(id).get();
        if (propietario == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(propietario);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id) {
        Propietario propietario = propietarioService.findById(id).get();
        if (propietario == null) {
            return ResponseEntity.notFound().build();
        }
        propietarioService.delete(id);
        return ResponseEntity.ok(propietario);
    }
    
}
