package com.vinho.service;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

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

import com.vinho.model.PedidoVinho;
import com.vinho.repository.PedidoVinhoRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class PedidoVinhoServiceTest {

	@MockBean
	private PedidoVinhoRepository pedidoVinhoRepository;
	
	@Autowired
	private PedidoVinhoService pedidoVinhoService;
	
	@Before
	public void setUp() throws Exception {
		BDDMockito.given(this.pedidoVinhoRepository.findOne(Mockito.anyLong())).willReturn(new PedidoVinho());
		BDDMockito.given(this.pedidoVinhoRepository.save(Mockito.any(PedidoVinho.class))).willReturn(new PedidoVinho());
	}
	
	@Test
	public void testBuscarPedidoPorId() {
		PedidoVinho pedidoVinho = this.pedidoVinhoService.salvar(new PedidoVinho());
		PedidoVinho pedidoVinhoSalvo = this.pedidoVinhoService.buscar(pedidoVinho.getId());

		assertTrue(pedidoVinho.getId() == pedidoVinhoSalvo.getId());
	}
	
	@Test
	public void testSalvarPedido() {
		PedidoVinho pedidoVinho = this.pedidoVinhoService.salvar(new PedidoVinho());

		assertNotNull(pedidoVinho);
	}
}
