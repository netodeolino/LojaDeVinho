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

import com.vinho.model.Pedido;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class PedidoRepositoryTest {

	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Test
	public void testFreteNotNull() {
		Pedido pedido = new Pedido();
		pedido.setFrete(30.0);
		
		Pedido pedidoSalvo = this.pedidoRepository.save(pedido);
		
		assertNotNull(pedidoSalvo.getFrete());
	}
	
	@Test
	public void testDistanciaNotNull() {
		Pedido pedido = new Pedido();
		pedido.setDistancia(12.0);
		
		Pedido pedidoSalvo = this.pedidoRepository.save(pedido);
		
		assertNotNull(pedidoSalvo.getDistancia());
	}
	
	@Test
	public void testListVinhoIsNull() {
		Pedido pedido = new Pedido();
		pedido.setFrete(30.0);
		pedido.setDistancia(12.0);
		
		Pedido pedidoSalvo = this.pedidoRepository.save(pedido);
		
		assertEquals(null, pedidoSalvo.getPedidovinhos());
	}
	
	@After
    public final void tearDown() { 
		this.pedidoRepository.deleteAll();
	}
}
