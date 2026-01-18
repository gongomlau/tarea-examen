import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoOpenLibrary } from './catalogo-open-library.component';

describe('CatalogoOpenLibrary', () => {
  let component: CatalogoOpenLibrary;
  let fixture: ComponentFixture<CatalogoOpenLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoOpenLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoOpenLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
