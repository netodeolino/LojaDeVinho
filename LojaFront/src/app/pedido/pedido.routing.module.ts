import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarPedidoComponent } from './cadastrar-pedido/cadastrar-pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const pedidoRoutes: Routes = [
    { path: 'cadastrar', component: CadastrarPedidoComponent },
    { path: 'listar', component: PedidosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(pedidoRoutes)],
    exports: [RouterModule]
})
export class PedidoRoutingModule {

}
