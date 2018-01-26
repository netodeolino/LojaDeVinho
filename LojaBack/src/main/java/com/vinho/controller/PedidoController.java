package com.vinho.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinho.model.Pedido;
import com.vinho.service.PedidoService;

@RestController
@RequestMapping(value="/pedido")
public class PedidoController {

	@Autowired
	private PedidoService pedidoService;
	
	@PostMapping(path="/cadastrar")
	public String salvar(@RequestBody Pedido pedido){
		pedidoService.salvar(pedido);
		return "sucesso";
	}
}
