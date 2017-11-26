import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAngamento: boolean = true

  public encerrarJogo(tipo: boolean): void{
	console.log(tipo)
	this.jogoEmAngamento = false
  }
}
