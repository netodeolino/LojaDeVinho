import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Vinho } from "./../_models/vinho";

@Injectable()
export class VinhoService {

  private apiUrl:string = 'http://localhost:8080/';
  private options: RequestOptions;
  vinho: Vinho;

  constructor(private http: Http) {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    header.append('Access-Control-Allow-Credentials', "true");

    this.options = new RequestOptions({ headers: header });
  }

  cadastrarVinho(vinho: Vinho): Observable<String> {
    return this.http.post(this.apiUrl + "vinho/cadastrar", vinho, this.options)
      .map(
        res => { return res.text(); }
      );
  }

  listarVinhos(): Observable<Vinho[]> {
    return this.http.get(this.apiUrl + "vinho/listar", this.options)
      .map(res => {
        return res.json();
      });
  }
}
