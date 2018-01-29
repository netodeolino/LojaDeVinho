import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'vinho',
        loadChildren: 'app/vinho/vinho.module#VinhoModule'
    },
    {
        path: 'pedido',
        loadChildren: 'app/pedido/pedido.module#PedidoModule'
    },
    {
        path: 'carrinho',
        loadChildren: 'app/carrinho/carrinho.module#CarrinhoModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
