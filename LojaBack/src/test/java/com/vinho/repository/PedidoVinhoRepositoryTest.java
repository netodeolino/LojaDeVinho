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

import com.vinho.model.PedidoVinho;
import com.vinho.model.Vinho;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class PedidoVinhoRepositoryTest {

	@Autowired
	private PedidoVinhoRepository pedidoVinhoRepository;
	
	@Autowired
	private VinhoRepository vinhoRepository;
	
	private static final int QUANTIDADE = 200;
	
	@Test
	public void testQuantidadeCorreta() {
		PedidoVinho pedidoVinho = new PedidoVinho();
		pedidoVinho.setQuantidade(QUANTIDADE);
		
		PedidoVinho pedidoVinhoSalvo = this.pedidoVinhoRepository.save(pedidoVinho);
		
		assertEquals(QUANTIDADE, pedidoVinhoSalvo.getQuantidade());
	}
	
	@Test
	public void testQuantidadeNotNull() {
		PedidoVinho pedidoVinho = new PedidoVinho();
		pedidoVinho.setQuantidade(QUANTIDADE);
		
		PedidoVinho pedidoVinhoSalvo = this.pedidoVinhoRepository.save(pedidoVinho);
		
		assertNotNull(pedidoVinhoSalvo.getQuantidade());
	}
	
	@Test
	public void testCompararVinhoPedidoVinhoCorreto() {
		Vinho vinho = new Vinho();
		vinho.setNome("France");
		vinho.setTipo("Rosé");
		Vinho vinhoSalvo = this.vinhoRepository.save(vinho);
		
		PedidoVinho pedidoVinho = new PedidoVinho();
		pedidoVinho.setQuantidade(QUANTIDADE);
		pedidoVinho.setVinho(vinhoSalvo);
		PedidoVinho pedidoVinhoSalvo = this.pedidoVinhoRepository.save(pedidoVinho);
		
		assertEquals(vinhoSalvo.getId(), pedidoVinhoSalvo.getVinho().getId());
	}
	
	@After
    public final void tearDown() { 
		this.pedidoVinhoRepository.deleteAll();
	}
}
