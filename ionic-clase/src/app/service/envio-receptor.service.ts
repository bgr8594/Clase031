import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioReceptorService {

  private objectSource = new BehaviorSubject<{}>({});
  private listSource = new BehaviorSubject<any[]>([]);

  $getObjectSource = this.objectSource.asObservable();
  $getListSource = this.listSource.asObservable();
  
  constructor(private http: HttpClient) { 

  }

  sendObjectSource(data: any){
    this.objectSource.next(data);
  }
  
  sendListSource(data: any[]){
    this.listSource.next(data);
  }

  getPersonajes() :Observable<any>{
    return this.http.get<any>(`http://swapi.dev/api/people/`,{});
  }

  getPersonaje(idPersonaje:string): Observable<any>{
    return this.http.get<any>(`http://swapi.dev/api/people/${idPersonaje}`,{});
  }
}
