package com.vinho.service;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.vinho.model.Vinho;
import com.vinho.repository.VinhoRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class VinhoServiceTest {

	@MockBean
	private VinhoRepository vinhoRepository;
	
	@Autowired
	private VinhoService vinhoService;
	
	@Before
	public void setUp() throws Exception {
		BDDMockito.given(this.vinhoRepository.findOne(Mockito.anyLong())).willReturn(new Vinho());
		BDDMockito.given(this.vinhoRepository.findAll(Mockito.anyList())).willReturn(new ArrayList<Vinho>());
		BDDMockito.given(this.vinhoRepository.save(Mockito.any(Vinho.class))).willReturn(new Vinho());
	}
	
	@Test
	public void testBuscarVinhoPorId() {
		Vinho vinho = this.vinhoService.salvar(new Vinho());
		Vinho vinhoSalvo = this.vinhoService.buscar(vinho.getId());

		assertTrue(vinho.getId() == vinhoSalvo.getId());
	}
	
	@Test
	public void testBuscarVinhos() {
		List<Vinho> vinhos = this.vinhoService.listar();

		assertNotNull(vinhos);
	}
	
	@Test
	public void testSalvarVinho() {
		Vinho vinho = this.vinhoService.salvar(new Vinho());

		assertNotNull(vinho);
	}
}
