import { Component, OnInit } from '@angular/core';
import { TopProductos } from '../Clases/TopProductos';
import { GeneralesService } from '../Services/generales.service';

@Component({
  selector: 'app-productos-mas-vendidos',
  templateUrl: './productos-mas-vendidos.component.html',
  styleUrls: ['./productos-mas-vendidos.component.css']
})
export class ProductosMasVendidosComponent implements OnInit {

  topProductos: TopProductos[] = []

  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
    this.service.obtenerTopProductos().subscribe(lista => {
      this.topProductos = lista;
      console.log(this.topProductos);
    });
  }
}
