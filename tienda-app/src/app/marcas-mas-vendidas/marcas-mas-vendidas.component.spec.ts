import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasMasVendidasComponent } from './marcas-mas-vendidas.component';

describe('MarcasMasVendidasComponent', () => {
  let component: MarcasMasVendidasComponent;
  let fixture: ComponentFixture<MarcasMasVendidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcasMasVendidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcasMasVendidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
