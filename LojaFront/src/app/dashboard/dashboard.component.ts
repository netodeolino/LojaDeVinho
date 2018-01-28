import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vinho } from './../_models/vinho';

import { VinhoService } from './../vinho/vinho.service';
import { CarrinhoService } from './../carrinho.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vinhos: Vinho[] = [];

  constructor(
    private serviceVinho: VinhoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.listarVinhos();
  }

  listarVinhos() {
    this.serviceVinho.listarVinhos().subscribe(
      lista => {
        this.vinhos = lista;
        console.log(lista);
      },
      error => console.log("Ocorreu um erro ao listar os Vinhos. Tente novamente mais tarde.", 3000, "red")
    );
  }

  adicionarVinhoPedido(vinho) {
    if (this.carrinhoService.adicionarVinhoNoCarrinho(vinho)) {
      console.log("Vinho adicionado ao Carrinho com sucesso!", 3000, "green");
    } else {
      console.log("Erro ao adicionar Vinho no Carrinho de Compras");
    }
  }

  removerVinhoPedido(vinho) {
    if (this.carrinhoService.removerVinhoDoCarrinho(vinho)) {
      console.log("Vinho removido do Carrinho com sucesso!", 3000, "green");
    } else {
      console.log("Erro ao remover Vinho do Carrinho de Compras");
    }
  }
}
