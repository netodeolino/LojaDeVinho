import { Injectable } from '@angular/core';
import { Vinho } from './_models/vinho';

@Injectable()
export class CarrinhoService {

  private key = '12312312';

  constructor() { }

  adicionarVinhoNoCarrinho(vinho) {
    let vinhos = JSON.parse(localStorage.getItem(this.key));

    if (!(vinhos.find(item => item.id === vinho.id))) {
      vinhos.push(vinho);
      localStorage.setItem(this.key, JSON.stringify(vinhos));
      return true;
    }
    return false;
  }

  removerVinhoDoCarrinho(vinho) {
    let vinhos = JSON.parse(localStorage.getItem(this.key));
    localStorage.removeItem(this.key);
    
    vinhos.splice(vinhos.findIndex(item => item.id === vinho.id), 1);
    localStorage.setItem(this.key, JSON.stringify(vinhos));
    return true;
  }

  flushCart() {
    let vinhos = JSON.parse(localStorage.getItem(this.key));

    vinhos = []
    localStorage.setItem(this.key, JSON.stringify(vinhos));
  }
}
