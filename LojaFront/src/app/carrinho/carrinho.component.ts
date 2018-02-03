import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

import { Vinho } from './../_models/vinho';
import { Pedido } from './../_models/pedido';
import { PedidoVinho } from './../_models/pedidovinho';

import { PedidoService } from './../pedido/pedido.service';
import { VinhoService } from './../vinho/vinho.service';
import { CarrinhoService } from './../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private key = '12312312';

  cadastro: any = {};
  pedido: Pedido = new Pedido();
  vinhos: Vinho[] = [];
  pedidoVinhos: PedidoVinho[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private servicePedido: PedidoService,
    private serviceVinho: VinhoService,
    private serviceCarrinho: CarrinhoService
  ) { }

  ngOnInit() {
    this.aplicarValidadores();
    this.carregarVinhos();
    this.listarPedidoVinhos();
  }

  private aplicarValidadores() {
    this.cadastro = this.formBuilder.group({
      distancia: ['', Validators.required]
    });
  }

  carregarVinhos() {
    this.vinhos = JSON.parse(localStorage.getItem(this.key));
  }

  listarPedidoVinhos() {
    for (let i = 0; i < this.vinhos.length; i++) {
      this.pedidoVinhos.push({ id:null, quantidade:1 , vinho:this.vinhos[i]});
    }
  }

  recarregarListarPedidoVinhos() {
    this.pedidoVinhos = [];
    for (let i = 0; i < this.vinhos.length; i++) {
      this.pedidoVinhos.push({ id:null, quantidade:1 , vinho:this.vinhos[i]});
    }
  }

  removerVinhoPedido(pedidoVinho) {
    if (this.serviceCarrinho.removerVinhoDoCarrinho(pedidoVinho.vinho)) {
      console.log("Vinho removido do Carrinho com sucesso!", 3000, "green");
      this.carregarVinhos();
      this.recarregarListarPedidoVinhos();
    } else {
      console.log("Erro ao remover Vinho do Carrinho de Compras");
    }
  }

  cadastrar() {
    this.pedido.pedidovinhos = this.pedidoVinhos;

    this.servicePedido.cadastrarPedido(this.pedido).subscribe(
      res => {
        this.pedido = new Pedido();
        this.serviceCarrinho.flushCart();
        console.log("Pedido cadastrado com sucesso!", 3000, "green");
        this.router.navigate(['pedido/listar']);
      },
      err => console.log("Ocorreu um erro ao cadastrar Pedido. Tente novamente mais tarde.", 3000, "red")
    );
  }
}
