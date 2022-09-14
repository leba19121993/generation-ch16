package com.generation.alo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.alo.models.UsuarioModel;
import com.generation.alo.repositories.UsuarioRepository;

@Service



public class UsuarioService {
	@Autowired
	UsuarioRepository usuariorepository;
	
	public ArrayList<UsuarioModel> obtenerusuarios(){
		return (ArrayList<UsuarioModel> )usuariorepository.findAll();
		

	}
	
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuariorepository.save(usuario);
    }

	

	

}
