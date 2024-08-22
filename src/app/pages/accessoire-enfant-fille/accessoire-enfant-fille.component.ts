import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-accessoire-enfant-fille',
  templateUrl: './accessoire-enfant-fille.component.html',
  styleUrls: ['./accessoire-enfant-fille.component.css']
})
export class AccessoireEnfantFilleComponent implements OnInit {
 
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
