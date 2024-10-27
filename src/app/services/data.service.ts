import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
  // Ajoutez d'autres propriétés si nécessaire
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }
  register(userData: any) {
    return this.http.post(`${this.apiUrl}/registre`, userData);
  }

  login(credentials: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }
  logout(): Observable<any> {
    return new Observable(observer => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
      observer.next({ message: 'Logout successful' });
      observer.complete();
    });
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
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/produits/${id}`);
  }
}
