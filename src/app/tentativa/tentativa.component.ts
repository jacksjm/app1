import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit {

  public coracaoCheio: string = '/assets/coracao_cheio.png'
  public coracaoVazio: string = '/assets/coracao_vazio.png'

  constructor() { }

  ngOnInit() {
  }

}
