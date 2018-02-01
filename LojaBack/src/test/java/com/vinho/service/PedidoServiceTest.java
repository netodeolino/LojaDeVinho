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

import com.vinho.model.Pedido;
import com.vinho.repository.PedidoRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class PedidoServiceTest {

	@MockBean
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private PedidoService pedidoService;
	
	@Before
	public void setUp() throws Exception {
		BDDMockito.given(this.pedidoRepository.findOne(Mockito.anyLong())).willReturn(new Pedido());
		BDDMockito.given(this.pedidoRepository.save(Mockito.any(Pedido.class))).willReturn(new Pedido());
	}
	
	@Test
	public void testBuscarPedidoPorId() {
		Pedido pedido = this.pedidoService.salvar(new Pedido());
		Pedido pedidoSalvo = this.pedidoService.buscar(pedido.getId());

		assertTrue(pedido.getId() == pedidoSalvo.getId());
	}
	
	@Test
	public void testSalvarPedido() {
		Pedido pedido = this.pedidoService.salvar(new Pedido());

		assertNotNull(pedido);
	}
}
