import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

import { Vinho } from './../_models/vinho';
import { Pedido } from './../_models/pedido';

import { PedidoService } from './../pedido/pedido.service';
import { VinhoService } from './../vinho/vinho.service';
import { CarrinhoService } from './../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  cadastro: any = {};
  pedido: Pedido = new Pedido();
  peso: number = 0;
  frete: number = 0;
  vinhos: Vinho[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private serviceVinho: VinhoService,
    private serviceCarrinho: CarrinhoService,
    private servicePedido: PedidoService
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

  listarVinhos() {
    //this.vinhos = this.serviceCarrinho.vinhos;
    console.log(this.vinhos);
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

  removerVinhoPedido(vinho) {
    if (this.serviceCarrinho.removerVinhoDoCarrinho(vinho)) {
      console.log("Vinho removido do Carrinho com sucesso!", 3000, "green");
    } else {
      console.log("Erro ao remover Vinho do Carrinho de Compras");
    }
  }

  cadastrar() {
    this.peso = this.calcularKilos(this.serviceCarrinho.vinhos);
    this.frete = this.calcularTotalFrete(this.peso);

    this.pedido.frete = this.frete;
    this.pedido.vinhos = this.serviceCarrinho.vinhos;

    this.servicePedido.cadastrarPedido(this.pedido).subscribe(
      res => {
        this.pedido = new Pedido();
        this.peso = 0;
        this.frete = 0;
        this.vinhos = [];
        console.log("Pedido cadastrado com sucesso!", 3000, "green");
        this.router.navigate(['pedido/listar']);
      },
      err => console.log("Ocorreu um erro ao cadastrar o Pedido. Tente novamente mais tarde.", 3000, "red")
    );
  }
}
