import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth';

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

  passerCommande(commandeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/commander`, commandeData, { headers: this.getHeaders() });
  }
  // obtenirFraisLivraison(): Observable<any> {
  //   const fraisLivraisonUrl = 'http://127.0.0.1:8000/api/auth/fraislivraison';
  //   return this.http.get(fraisLivraisonUrl, { headers: this.getHeaders() });
  // }
  obtenirFraisLivraison(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fraislivraison`,{ headers: this.getHeaders() });
  }
  obtenirAdressesExistantes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/addresslivraion`, { headers: this.getHeaders() });
  }
  obtenirDetailsCommande(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/commandes/detailscommande`, {
      headers: this.getHeaders(),
    });
  }
  obtenirHistoriqueDachat(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/historiquedachat`, {
      headers: this.getHeaders(),
    });
  }
}
