import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

import { VinhoService } from './../vinho/vinho.service';
import { CarrinhoService } from './../carrinho.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    VinhoService,
    CarrinhoService
  ]
})
export class DashboardModule { }
