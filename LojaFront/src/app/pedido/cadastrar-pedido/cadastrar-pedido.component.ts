import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

import { Pedido } from './../../_models/pedido';
import { Vinho } from './../../_models/vinho';

import { PedidoService } from './../pedido.service';
import { VinhoService } from './../../vinho/vinho.service';
import { CarrinhoService } from './../../carrinho.service';

@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.css']
})
export class CadastrarPedidoComponent implements OnInit {

  cadastro: any = {};
  pedido: Pedido = new Pedido();
  vinhos: Vinho[] = [];
  peso: number = 0;
  frete: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private servicePedido: PedidoService,
    private serviceVinho: VinhoService,
    private serviceCarrinho: CarrinhoService
  ) { }

  ngOnInit() {
    this.listarVinhos();
    this.aplicarValidadores();
  }

  private aplicarValidadores() {
    this.cadastro = this.formBuilder.group({
      quantidade: ['', Validators.required],
      distancia: ['', Validators.required],
      frete: ['', Validators.required],
      vinhos: ['', Validators.required]
    });
  }

  cadastrar() {
    //this.peso = this.calcularKilos(this.serviceCarrinho.vinhos);
    //this.frete = this.calcularTotalFrete(this.peso);

    //this.pedido.frete = this.frete;
    //this.pedido.vinhos = this.serviceCarrinho.vinhos;

/*
    this.servicePedido.cadastrarPedido(this.pedido).subscribe(
      res => {
        this.pedido = new Pedido();
        this.peso = 0;
        this.frete = 0;
        console.log("Pedido adicionado com sucesso!", 3000, "green");
        this.router.navigate(['pedido/listar']);
      },
      err => console.log("Ocorreu um erro ao adicionar o Pedido. Tente novamente mais tarde.", 3000, "red")
    );
*/
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
    if (this.serviceCarrinho.adicionarVinhoNoCarrinho(vinho)) {
      console.log("Vinho adicionado ao Carrinho com sucesso!", 3000, "green");
    } else {
      console.log("Erro ao adicionar Vinho no Carrinho de Compras");
    }
  }

  removerVinhoPedido(vinho) {
    if (this.serviceCarrinho.removerVinhoDoCarrinho(vinho)) {
      console.log("Vinho removido do Carrinho com sucesso!", 3000, "green");
    } else {
      console.log("Erro ao remover Vinho do Carrinho de Compras");
    }
  }

  calcularKilos(vinhos) {
    let kilos = 0;
    for (let vinho of vinhos) {
      kilos += vinho.peso;
    }
    return kilos;
  }

  calcularTotalFrete(kilos) {
    if (this.pedido.distancia <= 100) {
      return kilos * 5;
    } else {
      return kilos * 5 * this.pedido.distancia / 100;
    }
  }
}
