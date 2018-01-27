import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VinhoService } from './vinho.service';
import { VinhoRoutingModule } from './vinho.routing.module';
import { CadastrarVinhoComponent } from './cadastrar-vinho/cadastrar-vinho.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VinhoRoutingModule
  ],
  declarations: [
    CadastrarVinhoComponent
  ],
  exports: [
    CadastrarVinhoComponent
  ],
  providers: [
    VinhoService
  ]
})
export class VinhoModule { }
