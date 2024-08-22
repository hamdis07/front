import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-accessoire-bebe-fille',
  templateUrl: './accessoire-bebe-fille.component.html',
  styleUrls: ['./accessoire-bebe-fille.component.css']
})
export class AccessoireBebeFilleComponent implements OnInit {

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

