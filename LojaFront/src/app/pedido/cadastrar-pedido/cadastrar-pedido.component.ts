import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

import { ViewContainerRef } from '@angular/core';

import { Pedido } from './../../_models/pedido';
import { Vinho } from './../../_models/vinho';

import { PedidoService } from './../pedido.service';
import { VinhoService } from './../../vinho/vinho.service';

@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.css']
})
export class CadastrarPedidoComponent implements OnInit {

  cadastro: any = {};
  pedido: Pedido = new Pedido();
  vinhos: Vinho[] = [];
  vinhosDoPedido: Vinho[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private servicePedido: PedidoService,
    private serviceVinho: VinhoService
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
    let kilos: number = this.calcularKilos(this.vinhosDoPedido);
    let frete: number = this.calcularTotalFrete(kilos);

    this.pedido.frete = frete;
    this.pedido.vinhos = this.vinhosDoPedido;

    this.servicePedido.cadastrarPedido(this.pedido).subscribe(
      res => {
        this.pedido = new Pedido();
        console.log("Pedido adicionado com sucesso!", 3000, "green");
        this.router.navigate(['pedido/listar']);
      },
      err => console.log("Ocorreu um erro ao adicionar o Pedido. Tente novamente mais tarde.", 3000, "red")
    );
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
    if (this.vinhosDoPedido.indexOf(vinho) == -1) {
      this.vinhosDoPedido.push(vinho);
    }
  }

  removerVinhoPedido(vinho) {
    this.vinhosDoPedido.splice(this.vinhosDoPedido.indexOf(vinho), 1);
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
