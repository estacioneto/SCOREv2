import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent, InicioComponent]
})
export class PaginasModule { }
