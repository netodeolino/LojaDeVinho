package com.vinho.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinho.model.Pedido;
import com.vinho.model.PedidoVinho;
import com.vinho.service.PedidoService;
import com.vinho.service.PedidoVinhoService;

@RestController
@RequestMapping(value="/pedido")
public class PedidoController {

	@Autowired
	private PedidoService pedidoService;
	
	@Autowired
	private PedidoVinhoService pedidoVinhoService;
	
	@PostMapping(path="/cadastrar")
	public String salvar(@RequestBody Pedido pedido){
		
		List<PedidoVinho> pedidoVinhos = new ArrayList<PedidoVinho>();
		
		for (PedidoVinho pedidoVinho : pedido.getPedidovinhos()) {
			PedidoVinho pedidoVinhoSalvo = pedidoVinhoService.salvar(pedidoVinho);
			pedidoVinhos.add(pedidoVinhoSalvo);
		}
		pedido.setPedidovinhos(pedidoVinhos);
		pedidoService.salvar(pedido);
		return "sucesso";
	}
	
	@GetMapping(path="/listar")
	public List<Pedido> listar(){
		return pedidoService.listar();
	}
	
	@GetMapping(path="/buscar")
	public Pedido buscar(Long id) {
		return pedidoService.buscar(id);
	}
	
	@PutMapping(path="/atualizar")
	public String atualizar(@RequestBody Pedido pedido) {
		pedidoService.salvar(pedido);
		return "sucesso";
	}
	
	@DeleteMapping(path="/remover")
	public String remover(Long id) {
		pedidoService.excluir(id);
		return "sucesso";
	}
}
