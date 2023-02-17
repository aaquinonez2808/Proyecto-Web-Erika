package com.veterinaria.patitas.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.veterinaria.patitas.services.TratamientoService;
import com.veterinaria.patitas.models.entities.Tratamiento;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.List;



@RestController
@RequestMapping("/api/tratamiento")
public class TratamientoController {

    @Autowired(required = true)
    private TratamientoService tratamientoService;


    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody Tratamiento tratamiento) {
        Tratamiento tratamientoGuardado = tratamientoService.save(tratamiento);
        //Crear un objeto para retornar el estado, el mensaje y el objeto guardado
        return ResponseEntity.status(201).body(tratamientoGuardado);
    }

    @PutMapping("/update/{id}")
    private ResponseEntity<?> update(@RequestBody Tratamiento tratamiento, @PathVariable Long id) {
        Tratamiento tratamientoBuscado = tratamientoService.findById(id).get();
        if (tratamientoBuscado == null) {
            return ResponseEntity.notFound().build();
        }
        tratamiento.setId(tratamientoBuscado.getId());
        tratamientoService.save(tratamiento);
        return ResponseEntity.ok(tratamiento);
    }

    @GetMapping("/list")
    private ResponseEntity<?> list() {
        List<Tratamiento> tratamientos = tratamientoService.findAll();
        if (tratamientos.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(tratamientos);
    }

    @GetMapping("/find/{id}")
    private ResponseEntity<?> findById(@PathVariable Long id) {
        Tratamiento tratamiento = tratamientoService.findById(id).get();
        if (tratamiento == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(tratamiento);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id) {
        Tratamiento tratamiento = tratamientoService.findById(id).get();
        if (tratamiento == null) {
            return ResponseEntity.notFound().build();
        }
        tratamientoService.delete(tratamiento);
        return ResponseEntity.ok(tratamiento);
    }
    
}
