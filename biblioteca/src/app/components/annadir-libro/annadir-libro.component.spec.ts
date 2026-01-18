import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnadirLibro } from './annadir-libro.component';

describe('AnnadirLibro', () => {
  let component: AnnadirLibro;
  let fixture: ComponentFixture<AnnadirLibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnadirLibro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnadirLibro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
