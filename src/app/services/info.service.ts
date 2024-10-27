import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class infoService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth'; // Adjust the base URL if necessary

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Token manquant. Rediriger vers la page de connexion.');
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Consult user information
  consulterCoordonnees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/consulter-coordonnees`, { headers: this.getHeaders() });
  }

  // Modify user information
  modifierCoordonnees(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/modifier-coordonnees`, data, { headers: this.getHeaders() });
  }

  // Get purchase history
  historiquedachat(): Observable<any> {
    return this.http.get(`${this.apiUrl}/historiquedachat`, { headers: this.getHeaders() });
  }
}
