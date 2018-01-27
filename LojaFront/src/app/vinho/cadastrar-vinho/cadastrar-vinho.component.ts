import { Component, OnInit } from '@angular/core';
import { Vinho } from './../../_models/vinho';
import { VinhoService } from './../vinho.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-cadastrar-vinho',
  templateUrl: './cadastrar-vinho.component.html',
  styleUrls: ['./cadastrar-vinho.component.css']
})
export class CadastrarVinhoComponent implements OnInit {

  cadastro: any = {};
  vinho: Vinho = new Vinho();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: VinhoService
  ) { }

  ngOnInit() {
    this.aplicarValidadores();
  }

  private aplicarValidadores() {
    this.cadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      tipo: ['', Validators.required],
      peso: ['', Validators.required],
      pedido: ['', Validators.required]
    });
  }

  cadastrar() {
    this.service.cadastrarVinho(this.vinho).subscribe(
      res => {
        this.vinho = new Vinho();
        console.log("Vinho adicionado com sucesso!", 3000, "green");
        this.router.navigate(['vinho']);
      },
      err => console.log("Ocorreu um erro ao adicionar o Vinho. Tente novamente mais tarde.", 3000, "red")
    );
  }

}
