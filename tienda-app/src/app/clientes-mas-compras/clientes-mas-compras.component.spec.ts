import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesMasComprasComponent } from './clientes-mas-compras.component';

describe('ClientesMasComprasComponent', () => {
  let component: ClientesMasComprasComponent;
  let fixture: ComponentFixture<ClientesMasComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesMasComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesMasComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
