import { Component, OnInit } from '@angular/core';
import { Vinho } from './../../_models/vinho';
import { VinhoService } from './../vinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Vinho[] = [];

  constructor(
    private router: Router,
    private service: VinhoService
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listarVinhos().subscribe(
      lista => {
        this.vinhos = lista;
        console.log(lista);
      },
      error => console.log("Ocorreu um erro ao listar os Vinhos. Tente novamente mais tarde.", 3000, "red")
    );
  }
}
