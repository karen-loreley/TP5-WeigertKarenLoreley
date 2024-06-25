import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3listComponent } from './punto3list.component';

describe('Punto3listComponent', () => {
  let component: Punto3listComponent;
  let fixture: ComponentFixture<Punto3listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto3listComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto3listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
