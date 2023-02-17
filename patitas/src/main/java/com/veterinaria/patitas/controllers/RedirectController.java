package com.veterinaria.patitas.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class RedirectController {
    @GetMapping("/{path:[^\\.]*}")
    public String redirect(@PathVariable("path") String path) {
        return "forward:/";
    }
}