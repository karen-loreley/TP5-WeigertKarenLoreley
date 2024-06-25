import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3formComponent } from './punto3form.component';

describe('Punto3formComponent', () => {
  let component: Punto3formComponent;
  let fixture: ComponentFixture<Punto3formComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto3formComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto3formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
