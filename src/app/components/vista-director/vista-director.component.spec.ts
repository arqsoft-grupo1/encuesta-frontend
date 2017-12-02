import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDirectorComponent } from './vista-director.component';

describe('VistaDirectorComponent', () => {
  let component: VistaDirectorComponent;
  let fixture: ComponentFixture<VistaDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
