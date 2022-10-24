import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesProductoComunComponent } from './clientes-producto-comun.component';

describe('ClientesProductoComunComponent', () => {
  let component: ClientesProductoComunComponent;
  let fixture: ComponentFixture<ClientesProductoComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesProductoComunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesProductoComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
