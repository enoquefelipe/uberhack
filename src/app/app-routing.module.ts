import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemLocacaoComponent } from './item-locacao/item-locacao.component';
import { OptionListComponent } from './option-list/option-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

    { path: '', redirectTo: '/types', pathMatch: 'full' },
    { path: 'types', component: ItemLocacaoComponent },
    { path: 'options', component: OptionListComponent },
    { path: 'details', component: DetailsComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }