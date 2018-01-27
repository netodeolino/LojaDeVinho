import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarVinhoComponent } from './cadastrar-vinho/cadastrar-vinho.component';

const vinhoRoutes: Routes = [
    { path: 'cadastrar', component: CadastrarVinhoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(vinhoRoutes)],
    exports: [RouterModule]
})
export class VinhoRoutingModule {

}
