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

import com.vinho.model.Vinho;
import com.vinho.service.VinhoService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class VinhoControllerTest {

	@Autowired
	private MockMvc mvc;
	
	@MockBean
	private VinhoService vinhoService;
	
	@Test
	@WithMockUser
	public void testBuscarVinho() throws Exception {
		BDDMockito.given(this.vinhoService.buscar(Mockito.anyLong())).willReturn(new Vinho());

		mvc.perform(MockMvcRequestBuilders.get("/vinho/buscar").accept(MediaType.APPLICATION_JSON))
			.andExpect(status().is(200));
	}
}
