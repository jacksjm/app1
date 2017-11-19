import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = Frases
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 0

  constructor() {
	this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
	this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void{

	if(this.resposta == this.rodadaFrase.frasePtBr){
		alert('A tradução está correta!')
		this.progresso += 25
		this.rodada++
		this.atualizaRodada()
	}else{
		alert('A tradução não está correta!')
		this.tentativas++
	}
  }

  private atualizaRodada(): void{
	this.rodadaFrase = this.frases[this.rodada]
	this.resposta = ''
  }
}
