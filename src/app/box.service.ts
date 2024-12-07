import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private apiUrl = 'https://task-gy2z.onrender.com/api/squares'; 

  constructor(private http: HttpClient) { }


  getSquares(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }


  addSquare(title: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { title });
  }


  deleteSquare(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);  
  }


  getSquareById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);  
  }
}
