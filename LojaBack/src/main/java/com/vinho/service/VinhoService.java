package com.vinho.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vinho.model.Vinho;
import com.vinho.repository.VinhoRepository;

@Service
public class VinhoService {

	@Autowired
	VinhoRepository vinhoRepository;
	
	public Vinho salvar(Vinho vinho) {
		return vinhoRepository.save(vinho);
	}
	
	public Vinho buscar(Long id) {
		return vinhoRepository.findOne(id);
	}
	
	public void excluir(Long id) {
		vinhoRepository.delete(id);
	}
	
	public List<Vinho> listar(){
		return vinhoRepository.findAll();
	}
}
