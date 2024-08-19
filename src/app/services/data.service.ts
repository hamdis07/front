import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }
  register(userData:any){
    return this.http.post( `${this.apiUrl} /registre`, userData);
  }
  login(userData:any){
    return this.http.post(`${this.apiUrl} /login`, userData);

  }
  ajouteraupanier(produitId: number, quantity: number){
    return this.http.post(`${this.apiUrl} /panier/ajouter/${produitId}` , {quantity})
  }
  mettreAJourPanier(produitId: number, quantity: number) {
    return this.http.put(`${this.apiUrl}/mettre-a-jour/${produitId}`, { quantity });
  }

  retirerDuPanier(produitId: number) {
    return this.http.delete(`${this.apiUrl}/retirer/${produitId}`);
  }
}
