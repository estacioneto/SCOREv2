import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {InicioComponent} from './inicio/inicio.component';
import {PaginaErroComponent} from './pagina-erro/pagina-erro.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [InicioComponent, PaginaErroComponent]
})
export class PaginasModule { }
