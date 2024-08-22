import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-sac-enfant-garcon',
  templateUrl: './sac-enfant-garcon.component.html',
  styleUrls: ['./sac-enfant-garcon.component.css']
})
export class SacEnfantGarconComponent implements OnInit {

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
