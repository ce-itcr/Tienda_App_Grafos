import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManteClientesComponent } from './mante-clientes.component';

describe('ManteClientesComponent', () => {
  let component: ManteClientesComponent;
  let fixture: ComponentFixture<ManteClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManteClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManteClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
