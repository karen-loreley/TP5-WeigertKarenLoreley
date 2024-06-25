import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espectador } from '../model/espectador';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  listaEspectadores!: Array<Espectador>;

  constructor(private _http: HttpClient) { }

  getEspectadores():Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      )
      
    }
    return this._http.get("http://localhost:3000/api/espectador",httpOptions);
  }
}
