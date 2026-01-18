import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBiblioteca } from './mi-biblioteca.component';

describe('MiBiblioteca', () => {
  let component: MiBiblioteca;
  let fixture: ComponentFixture<MiBiblioteca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiBiblioteca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiBiblioteca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
