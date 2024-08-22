import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-sac-homme',
  templateUrl: './sac-homme.component.html',
  styleUrls: ['./sac-homme.component.css']
})
export class SacHommeComponent implements OnInit {
 
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
