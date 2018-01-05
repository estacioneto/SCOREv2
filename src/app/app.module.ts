import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {RotasModule} from './rotas/rotas.module';
import {PaginasModule} from './paginas/paginas.module';
import {NavegacaoModule} from './navegacao/navegacao.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    PaginasModule,
    NavegacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
