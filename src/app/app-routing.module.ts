import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemLocacaoComponent } from './item-locacao/item-locacao.component';

const routes: Routes = [

    { path: '', redirectTo: '/location', pathMatch: 'full' },
    { path: 'location', component: ItemLocacaoComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }