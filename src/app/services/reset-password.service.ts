import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Send forgot password request
  forgotPassword(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/forgot-password`, { email }, { headers });
  }

  // Reset password
  resetPassword(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/reset-password`, data, { headers });
  }
}
