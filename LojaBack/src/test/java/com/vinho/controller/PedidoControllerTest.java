package com.vinho.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.BDDMockito;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.vinho.model.Pedido;
import com.vinho.service.PedidoService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class PedidoControllerTest {

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private PedidoService pedidoService;
	
	@Test
	@WithMockUser
	public void testBuscarPedido() throws Exception {
		BDDMockito.given(this.pedidoService.buscar(Mockito.anyLong())).willReturn(new Pedido());

		mvc.perform(MockMvcRequestBuilders.get("/pedido/buscar").accept(MediaType.APPLICATION_JSON))
			.andExpect(status().is(200));
	}
}
