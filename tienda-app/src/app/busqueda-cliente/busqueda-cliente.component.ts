import { Component, OnInit } from '@angular/core';
import { BusquedaCliente } from '../Clases/BusquedaCliente';
import { GeneralesService } from '../Services/generales.service';
import { TopProductos } from '../Clases/TopProductos';

@Component({
  selector: 'app-busqueda-cliente',
  templateUrl: './busqueda-cliente.component.html',
  styleUrls: ['./busqueda-cliente.component.css']
})
export class BusquedaClienteComponent implements OnInit {


  buscarCliente: BusquedaCliente = new BusquedaCliente
  datos: TopProductos[] = []  
  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
  }

  cargarHistorialCliente():void{
    this.service.historialCliente(this.buscarCliente).subscribe(lista => {
      this.datos = lista;
      console.log(this.datos);
    })
  }


}
