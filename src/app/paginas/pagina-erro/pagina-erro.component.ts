import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MENSAGENS_ERRO} from '../../../environments/erro.constants';

@Component({
  selector: 'app-pagina-erro',
  templateUrl: './pagina-erro.component.html',
  styleUrls: ['./pagina-erro.component.css']
})
export class PaginaErroComponent implements OnInit {

  mensagem: string;
  status: number;

  constructor(private rotaAtual: ActivatedRoute) {
  }

  ngOnInit() {
    this.status = this.rotaAtual.snapshot.params.status;
    this.mensagem = MENSAGENS_ERRO[this.status];
  }

}
