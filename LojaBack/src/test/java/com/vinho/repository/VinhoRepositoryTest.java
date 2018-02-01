package com.vinho.repository;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.vinho.model.Vinho;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class VinhoRepositoryTest {

	@Autowired
	private VinhoRepository vinhoRepository;
	
	@Test
	public void testNomeNotNull() {
		Vinho vinho = new Vinho();
		vinho.setNome("France");
		
		Vinho vinhoSalvo = this.vinhoRepository.save(vinho);
		
		assertNotNull(vinhoSalvo.getNome());
	}
	
	@Test
	public void testTipoNotNull() {
		Vinho vinho = new Vinho();
		vinho.setTipo("Rosé");
		
		Vinho vinhoSalvo = this.vinhoRepository.save(vinho);
		
		assertNotNull(vinhoSalvo.getTipo());
	}
	
	@Test
	public void testPesoIsNull() {
		Vinho vinho = new Vinho();
		vinho.setNome("France");
		vinho.setTipo("Rosé");
		
		Vinho vinhoSalvo = this.vinhoRepository.save(vinho);
		
		assertEquals(null, vinhoSalvo.getPeso());
	}
	
	@After
    public final void tearDown() { 
		this.vinhoRepository.deleteAll();
	}
}
