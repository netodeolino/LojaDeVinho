import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVinhoComponent } from './cadastrar-vinho.component';

describe('CadastrarVinhoComponent', () => {
  let component: CadastrarVinhoComponent;
  let fixture: ComponentFixture<CadastrarVinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarVinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
