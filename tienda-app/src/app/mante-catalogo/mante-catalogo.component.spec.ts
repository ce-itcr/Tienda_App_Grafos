import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteCatalogoComponent } from './mante-catalogo.component';

describe('ManteCatalogoComponent', () => {
  let component: ManteCatalogoComponent;
  let fixture: ComponentFixture<ManteCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteCatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManteCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
