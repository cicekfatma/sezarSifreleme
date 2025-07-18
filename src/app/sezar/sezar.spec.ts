import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sezar } from './sezar';

describe('Sezar', () => {
  let component: Sezar;
  let fixture: ComponentFixture<Sezar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sezar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sezar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
