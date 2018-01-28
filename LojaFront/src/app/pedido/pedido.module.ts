import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PedidoService } from './pedido.service';
import { VinhoService } from './../vinho/vinho.service';
import { CadastrarPedidoComponent } from './cadastrar-pedido/cadastrar-pedido.component';
import { PedidoRoutingModule } from './pedido.routing.module';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PedidoRoutingModule
  ],
  declarations: [
    CadastrarPedidoComponent,
    PedidosComponent
  ],
  exports: [
    CadastrarPedidoComponent
  ],
  providers: [
      PedidoService,
      VinhoService
  ]
})
export class PedidoModule { }
