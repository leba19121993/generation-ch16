package com.generation.alo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.generation.alo.Models.UsuarioModel;
@Repository
public class UsuarioRepositoy {
	public interface UsuarioRepository extends JpaRepository<UsuarioModel, Integer>{
	
		
	}
	

}
