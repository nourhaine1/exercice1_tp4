import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent implements OnInit {
  telephone = {
    marque:"Samsung",
    modele:"A51",
    photo:"assets/samsung.jpg",
    prix:1150
    }
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  
    alert("Telephone " + this.telephone.marque +" son prix est "+this.telephone.prix);

}
}
