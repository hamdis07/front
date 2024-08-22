import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-chemise-femme',
  templateUrl: './chemise-femme.component.html',
  styleUrls: ['./chemise-femme.component.css']
})
export class ChemiseFemmeComponent implements OnInit {
    
  produit:any=[]

  constructor(private ds:DataService) { }
  ajouteraupanier(produitId: number, quantity: number, ){
    this.ds.ajouteraupanier(produitId, quantity).subscribe(data => {
      this.produit=data
      console.log(produitId);
    });

  }

  ngOnInit(): void {
  }

}