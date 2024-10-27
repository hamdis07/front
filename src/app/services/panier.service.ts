import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private produits: any[] = [];

  private apiUrl = 'http://127.0.0.1:8000/api/auth/panier';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Token manquant. Rediriger vers la page de connexion.');
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  consulterPanier(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/consulterPanier`, { headers: this.getHeaders() });
  }
  getProduitsSelectionnes() {
    return this.produits.filter(produit => produit.selected); // Récupère uniquement les produits sélectionnés
  }
  retirerDuPanier(produitId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/retirer/${produitId}`, { headers: this.getHeaders() });
  }


  mettreAJourPanier(produitId: number, productData: any): Observable<any> {
    const url = `${this.apiUrl}/mettre-a-jour/${produitId}`;
    return this.http.post(url, productData, { headers: this.getHeaders() });
  }

  
   ajouterProduitAuPanier(produitId: number, requestPayload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ajouter/${produitId}`, requestPayload,{ headers: this.getHeaders() });
  }

}
