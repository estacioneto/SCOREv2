import {InicioComponent} from '../paginas/inicio/inicio.component';
import {PaginaErroComponent} from '../paginas/pagina-erro/pagina-erro.component';
import {Route} from '@angular/router';

export const APP_ROTAS: Route[] = [
  {
    path: '',
    component: InicioComponent
  }, {
    path: 'erro/:status',
    component: PaginaErroComponent
  }, {
    path: '**',
    redirectTo: '/erro/404'
  }
];
