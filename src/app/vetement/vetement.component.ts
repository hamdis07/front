import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.component.html',
  styleUrls: ['./vetement.component.css']
})
export class VetementComponent implements OnInit {

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
