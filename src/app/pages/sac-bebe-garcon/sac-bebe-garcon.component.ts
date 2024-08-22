import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sac-bebe-garcon',
  templateUrl: './sac-bebe-garcon.component.html',
  styleUrls: ['./sac-bebe-garcon.component.css']
})
export class SacBebeGarconComponent implements OnInit {
 
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
