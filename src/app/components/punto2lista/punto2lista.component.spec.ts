import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2listaComponent } from './punto2lista.component';

describe('Punto2listaComponent', () => {
  let component: Punto2listaComponent;
  let fixture: ComponentFixture<Punto2listaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto2listaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto2listaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
