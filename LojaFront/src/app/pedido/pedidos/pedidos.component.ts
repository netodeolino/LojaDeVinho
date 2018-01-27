import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pedido } from './../../_models/pedido';
import { PedidoService } from './../pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(
    private router: Router,
    private service: PedidoService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listarPedidos().subscribe(
      lista => {
        this.pedidos = lista;
        console.log(lista);
      },
      error => console.log("Ocorreu um erro ao listar os Pedidos. Tente novamente mais tarde.", 3000, "red")
    );
  }
}
