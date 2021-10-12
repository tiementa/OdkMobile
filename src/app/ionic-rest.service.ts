import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export class Apprenant {
  id: string;
  name: string;
  email: string;
  dob: number;
  fees: number;
}

@Injectable({
  providedIn: 'root'
})

export class IonicRestService {
   host=environment.Host;
   httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public listeApprenant(){
      return this.http.get(this.host+"/all")
  }

  public setNom(name: any){
    localStorage.setItem('nom', name);
  }

  public getNom(){
    return localStorage.getItem('nom');
  }

  public setPrenom(name: any){
    localStorage.setItem('prenom', name);
  }

  public getPrenom(){
    return localStorage.getItem('prenom');
  }

  public connexionApprenant(username: string, password: string){
    return this.http.get(this.host+"/conn/"+username+"/"+password)
}

  
  }
