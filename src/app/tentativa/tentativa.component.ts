import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit, OnChanges {

  @Input() public tentativas: number

  public coracoes: Array<Coracao> = [
	  new Coracao(true),
	  new Coracao(true),
	  new Coracao(true)
  ]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
	  console.log(this.tentativas)
  }

}
