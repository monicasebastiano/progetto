import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progettoAngular';

  cane: any;
  gatto: any;
  criceto: any;
  coniglio: any;
  pappagallo: any;


  funzione(descrizione: any) {
    this.cane = document.getElementById("Cane");
    this.gatto = document.getElementById("Gatto");
    this.criceto = document.getElementById("Criceto");
    this.coniglio = document.getElementById("Coniglio");
    this.pappagallo = document.getElementById("Pappagallo");
    this.criceto.style.display = "none";
    this.gatto.style.display = "none";
    this.cane.style.display = "none";
    this.coniglio.style.display = "none";
    this.pappagallo.style.display = "none";


    if (descrizione == "cane") {
      
      if (this.cane.style.display == "none"){
        this.cane.style.display = "flex";
      } else{
        this.cane.style.display = "none";

      }
      
      
      
    }
    if (descrizione == "gatto") {
      if (this.gatto.style.display == "none"){
        this.gatto.style.display = "flex";
      } else{
        this.gatto.style.visibility = "none";

      }
    }
    if (descrizione == "criceto") {
      if (this.criceto.style.display == "none"){
        this.criceto.style.display = "flex";
      } else{
        this.criceto.style.display = "none";

      }
    }

    if (descrizione == "coniglio") {
      if (this.coniglio.style.display == "none"){
        this.coniglio.style.display = "flex";
      } else{
        this.coniglio.style.display = "none";

      }
    }

    if (descrizione == "pappagallo") {
      if (this.pappagallo.style.display == "none"){
        this.pappagallo.style.display = "flex";
      } else{
        this.pappagallo.style.display = "none";

      }
    }










  }

}