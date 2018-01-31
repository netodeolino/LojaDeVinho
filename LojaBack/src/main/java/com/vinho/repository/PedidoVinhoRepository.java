package com.vinho.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vinho.model.PedidoVinho;

@Repository
@Transactional
public interface PedidoVinhoRepository extends JpaRepository<PedidoVinho, Long> {

}
