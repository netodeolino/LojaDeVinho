import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoRoutingModule } from './carrinho.routing.module';

import { VinhoService } from './../vinho/vinho.service';
import { CarrinhoService } from './../carrinho.service';
import { PedidoService } from './../pedido/pedido.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CarrinhoRoutingModule
  ],
  declarations: [
    CarrinhoComponent
  ],
  exports: [
    CarrinhoComponent
  ],
  providers: [
    VinhoService,
    CarrinhoService,
    PedidoService
  ]
})
export class CarrinhoModule { }
