import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemLocacaoComponent } from './item-locacao/item-locacao.component';
import { OptionListComponent } from './option-list/option-list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [AppComponent, ItemLocacaoComponent, OptionListComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
