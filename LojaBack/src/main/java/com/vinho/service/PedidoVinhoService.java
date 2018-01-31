package com.vinho.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vinho.model.PedidoVinho;
import com.vinho.repository.PedidoVinhoRepository;

@Service
public class PedidoVinhoService {

	@Autowired
	PedidoVinhoRepository pedidoVinhoRepository;
	
	public PedidoVinho salvar(PedidoVinho pedidoVinho) {
		return pedidoVinhoRepository.save(pedidoVinho);
	}
	
	public PedidoVinho buscar(Long id) {
		return pedidoVinhoRepository.findOne(id);
	}
	
	public void excluir(Long id) {
		pedidoVinhoRepository.delete(id);
	}
	
	public List<PedidoVinho> listar(){
		return pedidoVinhoRepository.findAll();
	}
}
