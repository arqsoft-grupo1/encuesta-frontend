import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOfertaComponent } from './lista-oferta.component';

describe('ListaOfertaComponent', () => {
  let component: ListaOfertaComponent;
  let fixture: ComponentFixture<ListaOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
