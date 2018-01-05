import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarPrincipalComponent } from './toolbar-principal/toolbar-principal.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [ToolbarPrincipalComponent],
  exports: [
    ToolbarPrincipalComponent
  ]
})
export class NavegacaoModule { }
