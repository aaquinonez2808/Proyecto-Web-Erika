package com.veterinaria.patitas.security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.veterinaria.patitas.models.entities.Usuario;
import com.veterinaria.patitas.repositories.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario= usuarioRepository.findOneByEmail(username).orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
        return new UserDetailsImp(usuario);
    }

}
