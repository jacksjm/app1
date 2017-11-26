import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAngamento: boolean = true
  public tipoEncerramento: boolean

  public encerrarJogo(tipo: boolean): void{
	this.tipoEncerramento = tipo
	this.jogoEmAngamento = false
  }

  public reiniciarJogo(): void{
	  this.jogoEmAngamento = true
	  this.tipoEncerramento = undefined
  }
}
