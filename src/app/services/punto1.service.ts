import { Injectable } from '@angular/core';
import { Punto1 } from '../model/punto1';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto1Service {
  expedientes!:Array<Punto1>;

  constructor(private _http: HttpClient){
    
  }

   getProducto():Observable<any>{
   let httpOption = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
   }
   return this._http.get('http://localhost:3000/api/producto',httpOption);
  }

  add(producto:Punto1):Observable<any>{
    //console.log(expediente);
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     let body:any = JSON.stringify(producto);
     return this._http.post('http://localhost:3000/api/producto',body ,httpOption);
  }

  update(producto:Punto1):Observable<any>{
    console.log(producto);
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     let body:any = JSON.stringify(producto);
     return this._http.put('http://localhost:3000/api/producto/'+producto._id,body, httpOption);
  }


  getProductoById(_id:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     return this._http.get('http://localhost:3000/api/producto/'+_id,httpOption);
  }

  deleteProducto(id:string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     return this._http.delete('http://localhost:3000/api/producto/'+id,httpOption);
  }

  productosdestados():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
     }
     return this._http.get('http://localhost:3000/api/producto/destacados',httpOption);
  }

}
