import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destino } from './destino';

describe('Destino', () => {
  let component: Destino;
  let fixture: ComponentFixture<Destino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destino],
    }).compileComponents();

    fixture = TestBed.createComponent(Destino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
