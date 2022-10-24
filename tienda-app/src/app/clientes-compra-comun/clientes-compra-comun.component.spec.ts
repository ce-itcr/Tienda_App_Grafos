import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCompraComunComponent } from './clientes-compra-comun.component';

describe('ClientesCompraComunComponent', () => {
  let component: ClientesCompraComunComponent;
  let fixture: ComponentFixture<ClientesCompraComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesCompraComunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesCompraComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
