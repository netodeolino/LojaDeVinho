package com.vinho.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinho.model.Pedido;
import com.vinho.model.Vinho;
import com.vinho.service.PedidoService;
import com.vinho.service.VinhoService;

@RestController
@RequestMapping(value="/vinho")
public class VinhoController {

	@Autowired
	private VinhoService vinhoService;
	
	@Autowired
	private PedidoService pedidoService;
	
	@PostMapping(path="/cadastrar")
	public String salvar(@RequestBody Vinho vinho){
		vinhoService.salvar(vinho);
		return "sucesso";
	}
	
	@GetMapping(path="/listar")
	public List<Vinho> listar(){
		return vinhoService.listar();
	}
	
	@GetMapping(path="/listardisponiveis")
	public List<Vinho> listarVinhosDisponiveis(){
		List<Vinho> vinhosDisponiveis = this.vinhoService.listar();

		for (Pedido pedido : this.pedidoService.listar()) {
			for (Vinho vinho : this.vinhoService.listar()) {
				if (pedido.getVinhos().contains(vinho)) {
					vinhosDisponiveis.remove(vinho);
				}
			}
		}
		return vinhosDisponiveis;
	}
}
