import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPedidoComponent } from './cadastrar-pedido.component';

describe('CadastrarPedidoComponent', () => {
  let component: CadastrarPedidoComponent;
  let fixture: ComponentFixture<CadastrarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
