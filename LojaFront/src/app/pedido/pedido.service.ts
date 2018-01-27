import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Pedido } from "./../_models/pedido";

@Injectable()
export class PedidoService {

  private apiUrl:string = 'http://localhost:8080/';
  private options: RequestOptions;
  pedido: Pedido;

  constructor(private http: Http) { }

  cadastrarPedido(pedido: Pedido): Observable<String> {
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    header.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    header.append('Access-Control-Allow-Credentials', "true");

    this.options = new RequestOptions({ headers: header });

    return this.http.post(this.apiUrl + "pedido/cadastrar", pedido, this.options)
      .map(
        res => { return res.text(); }
      );
  }

  listarPedidos(): Observable<Pedido[]> {
    return this.http.get(this.apiUrl + "pedido/listar", this.options)
      .map(res => {
        return res.json();
      });
  }
}
