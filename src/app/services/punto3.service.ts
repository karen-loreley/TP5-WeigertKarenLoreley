import { Injectable } from '@angular/core';
import { Punto3 } from '../model/punto3';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto3Service {
 
ticket!:Array<Punto3>;

  constructor(private _http: HttpClient){}

   getTickets():Observable<any>{
   let httpOption = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
   }
   return this._http.get("http://localhost:3000/api/ticket/",httpOption);
  }

  add(ticket:Punto3):Observable<any>{
    console.log(ticket);
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     let body:any = JSON.stringify(ticket);
     return this._http.post("http://localhost:3000/api/ticket/",body ,httpOption);
  }

  update(ticket:Punto3):Observable<any>{
    
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     let body = JSON.stringify(ticket);
     return this._http.put("http://localhost:3000/api/ticket/"+ticket._id,body, httpOption);
  }

  getTicket(_id:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     return this._http.get("http://localhost:3000/api/ticket/"+_id,httpOption);
  }

  deleteTicket(id:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     return this._http.delete("http://localhost:3000/api/ticket/"+id,httpOption);
  }

  public getEspectador(categoria:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get("http://localhost:3000/api/ticket/categoria/"+categoria, httpOptions);
  }
}
