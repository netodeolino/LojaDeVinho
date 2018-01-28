import { Injectable } from '@angular/core';
import { Vinho } from './_models/vinho';

@Injectable()
export class CarrinhoService {

  vinhos: Vinho[] = [];

  constructor() { }

  adicionarVinhoNoCarrinho(vinho) {
    if (this.vinhos.indexOf(vinho) == -1) {
      this.vinhos.push(vinho);
      return true;
    }
    return false;
  }

  removerVinhoDoCarrinho(vinho) {
    this.vinhos.splice(this.vinhos.indexOf(vinho), 1);
    return true;
  }
}
