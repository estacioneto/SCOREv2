import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {APP_ROTAS} from './constants';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROTAS)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RotasModule { }
