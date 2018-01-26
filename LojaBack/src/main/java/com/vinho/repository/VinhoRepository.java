package com.vinho.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vinho.model.Vinho;

@Repository
@Transactional
public interface VinhoRepository extends JpaRepository<Vinho, Long> {

}
