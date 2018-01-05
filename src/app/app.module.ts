import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RotasModule} from './rotas/rotas.module';
import {PaginasModule} from './paginas/paginas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RotasModule,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
