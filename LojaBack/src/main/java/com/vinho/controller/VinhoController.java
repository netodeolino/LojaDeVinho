package com.vinho.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinho.model.Vinho;
import com.vinho.service.VinhoService;

@RestController
@RequestMapping(value="/vinho")
public class VinhoController {

	@Autowired
	private VinhoService vinhoService;
	
	@PostMapping(path="/cadastrar")
	public String salvar(@RequestBody Vinho vinho){
		vinhoService.salvar(vinho);
		return "sucesso";
	}
	
	@GetMapping(path="/listar")
	public List<Vinho> listar(){
		return vinhoService.listar();
	}
	
	@GetMapping(path="/buscar")
	public Vinho buscar(Long id) {
		return vinhoService.buscar(id);
	}
	
	@PutMapping(path="/atualizar")
	public String atualizar(@RequestBody Vinho vinho) {
		vinhoService.salvar(vinho);
		return "sucesso";
	}
	
	@DeleteMapping(path="/remover")
	public String remover(Long id) {
		vinhoService.excluir(id);
		return "sucesso";
	}
}
