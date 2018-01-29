import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoComponent } from './carrinho.component';

const carrinhoRoutes: Routes = [
    { path: '', component: CarrinhoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(carrinhoRoutes)],
    exports: [RouterModule]
})
export class CarrinhoRoutingModule {

}
