package com.generation.alo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertTrue;


import com.generation.alo.Models.UsuarioModel;
import com.generation.alo.Repositories.UsuarioRepositoy.UsuarioRepository;

@SpringBootTest
class SpringPruebasApplicationTests {
	@Autowired
	private UsuarioRepository usuariorepository;
	
	@Test
	
	void crearUsuarioTest() {
		
	UsuarioModel usuariomodel = new UsuarioModel();
	
	usuariomodel.setId(1);
	usuariomodel.setNombre("Abel");
	usuariomodel.setClave("1234");
	
	UsuarioModel r = usuariorepository.save(usuariomodel);
	
	assertTrue(r.getClave().equalsIgnoreCase(usuariomodel.getNombre()));
	
	System.out.println(usuariomodel.getNombre());

	
	}

}
