import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../Services/generales.service';
import { BusquedaCliente } from '../Clases/BusquedaCliente';
import { TopProductos } from '../Clases/TopProductos';
import { Producto } from '../Clases/Producto';
import { Cliente } from '../Clases/Cliente';
@Component({
  selector: 'app-clientes-producto-comun',
  templateUrl: './clientes-producto-comun.component.html',
  styleUrls: ['./clientes-producto-comun.component.css']
})
export class ClientesProductoComunComponent implements OnInit {

  buscarCliente: BusquedaCliente = new BusquedaCliente
  datos: TopProductos[] = []
  producto: Producto = new Producto;
  ListaClientes: Cliente[] = []

  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
  }

  cargarHistorialCliente():void{
    this.service.historialCliente(this.buscarCliente).subscribe(lista => {
      this.datos = lista;
      console.log(this.datos);
    })
  }

  cargarListaClientes():void{
    console.log(this.producto)
  }

}
