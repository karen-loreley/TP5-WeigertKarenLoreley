import { Injectable } from '@angular/core';
import { Punto2 } from '../model/punto2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto2Service {
  transaccion!:Array<Punto2>;

  constructor(private _http: HttpClient){
    
  }
 
   getTransaccion():Observable<any>{
   let httpOption = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
   }
   return this._http.get('http://localhost:3000/api/transaccion',httpOption);
  }

  add(transaccion:Punto2):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     let body:any = JSON.stringify(transaccion);
     return this._http.post('http://localhost:3000/api/transaccion',body ,httpOption);
  }

  update(transaccion:Punto2):Observable<any>{
    console.log(transaccion);
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     let body:any = JSON.stringify(transaccion);
     return this._http.put('http://localhost:3000/api/transaccion/'+transaccion._id,body, httpOption);
  }


  getTransaccionById(_id:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     return this._http.get('http://localhost:3000/api/transaccion/'+_id,httpOption);
  }

  deleteTransaccion(id:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     return this._http.delete('http://localhost:3000/api/transaccion/'+id,httpOption);
  }


  public convertCurrency(from:string, to:string, amount:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '67e23b2735msh07d1ec62b81fbc4p1f9119jsn8dfd9af05e8c',
		    'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
      }),
    }
    return this._http.get("https://currency-converter-pro1.p.rapidapi.com/convert?from="+from+"&to="+to+"&amount="+amount, httpOptions);
  }


  getTransaccionesPorDivisas(origen: string, destino: string): Observable<any> {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get('http://localhost:3000/api/transaccion/'+origen+'/'+destino, httpOption);
  }
}