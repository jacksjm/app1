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

  public tentativas: number = 3

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
		//Incrementa barra de progresso
		this.progresso += 25 //this.progresso + ( 100 / this.frases.length )

		//trocar pergunta da rodada
		this.rodada++

		if(this.rodada === 4){
			alert('Você traduziu as frases corretamente')
		}
		//atualiza o objeto rodadaFrase
		this.atualizaRodada()
	}else{
		//diminui as tentativas
		this.tentativas--
		if(this.tentativas === -1){
			alert('Você perdeu todas as tentativas')
		}
	}
  }

  private atualizaRodada(): void{
	this.rodadaFrase = this.frases[this.rodada]
	this.resposta = ''
  }
}
