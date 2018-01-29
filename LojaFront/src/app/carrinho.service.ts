import { Injectable } from '@angular/core';
import { Vinho } from './_models/vinho';

@Injectable()
export class CarrinhoService {

  private key = '12312312';

  constructor() { }

  adicionarVinhoNoCarrinho(vinho) {
    let vinhos = JSON.parse(localStorage.getItem(this.key));
    //console.log(vinhos);
    //console.log(vinhos.indexOf(vinho));
    //console.log(vinhos.find(item => item.id === vinho.id));
    if (!(vinhos.find(item => item.id === vinho.id))) {
      vinhos.push(vinho);
      localStorage.setItem(this.key, JSON.stringify(vinhos));
      return true;
    }
    return false;
  }

  removerVinhoDoCarrinho(vinho) {
    let vinhos = JSON.parse(localStorage.getItem(this.key));
    vinhos.splice(vinhos.indexOf(vinho), 1);
    localStorage.setItem(this.key, JSON.stringify(vinhos));
    return true;
  }

  flushCart() {
    let vinhos = JSON.parse(localStorage.getItem(this.key));
    vinhos = []
    localStorage.setItem(this.key, JSON.stringify(vinhos));
  }
}
