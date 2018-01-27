import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

import { Pedido } from './../../_models/pedido';
import { PedidoService } from './../pedido.service';

@Component({
  selector: 'app-cadastrar-pedido',
  templateUrl: './cadastrar-pedido.component.html',
  styleUrls: ['./cadastrar-pedido.component.css']
})
export class CadastrarPedidoComponent implements OnInit {

  cadastro: any = {};
  pedido: Pedido = new Pedido();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: PedidoService
  ) { }

  ngOnInit() {
    this.aplicarValidadores();
  }

  private aplicarValidadores() {
    this.cadastro = this.formBuilder.group({
      quantidade: ['', Validators.required],
      distancia: ['', Validators.required],
      frete: ['', Validators.required],
      produtos: ['', Validators.required]
    });
  }

  cadastrar() {
    this.service.cadastrarPedido(this.pedido).subscribe(
      res => {
        this.pedido = new Pedido();
        console.log("Pedido adicionado com sucesso!", 3000, "green");
        this.router.navigate(['pedido']);
      },
      err => console.log("Ocorreu um erro ao adicionar o Pedido. Tente novamente mais tarde.", 3000, "red")
    );
  }

}
