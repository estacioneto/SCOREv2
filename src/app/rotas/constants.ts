import {NotFoundComponent} from '../paginas/not-found/not-found.component';
import {InicioComponent} from '../paginas/inicio/inicio.component';

export const APP_ROTAS = [
  {
    path: '',
    component: InicioComponent
  }, {
    path: '404',
    component: NotFoundComponent
  }, {
    path: '**',
    redirectTo: '/404'
  }
];
