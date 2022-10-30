import { Component, OnInit } from '@angular/core';
import { TopClientes } from '../Clases/TopClientes';
import { GeneralesService } from '../Services/generales.service';

@Component({
  selector: 'app-clientes-mas-compras',
  templateUrl: './clientes-mas-compras.component.html',
  styleUrls: ['./clientes-mas-compras.component.css']
})
export class ClientesMasComprasComponent implements OnInit {

  topClientes: TopClientes[] = []

  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
    this.service.obtenerTopClientes().subscribe(lista => {
      this.topClientes = lista;
      console.log(this.topClientes);
    });
  }
}
