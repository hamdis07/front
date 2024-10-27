import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth'; // Replace with your backend URL

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

  // Get a message by ID
  getMessage(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/messages/${id}`,  { headers: this.getHeaders() });
  }

  // Reply to a message
  replyToMessage(idMessage: number, content: string, file?: File): Observable<any> {
    const formData = new FormData();
    formData.append('content', content);

    // Si un fichier est fourni, l'ajouter au FormData
    if (file) {
      formData.append('file', file);
    }

    return this.http.post(`${this.apiUrl}/messages/${idMessage}/reply`, formData, {
      headers: this.getHeaders(),
    });
  }

  // Contact admin
  contactAdmin(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/messages/contact-admin`, formData, { headers: this.getHeaders() });
  }


  getReceivedMessages(): Observable<any> {
    const url = `${this.apiUrl}/message/reçus`; // URL de la nouvelle route
    return this.http.get(url, { headers: this.getHeaders() });
  }

}
