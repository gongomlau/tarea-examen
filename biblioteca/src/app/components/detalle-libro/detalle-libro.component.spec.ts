import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLibro } from './detalle-libro.component';

describe('DetalleLibro', () => {
  let component: DetalleLibro;
  let fixture: ComponentFixture<DetalleLibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleLibro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleLibro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
