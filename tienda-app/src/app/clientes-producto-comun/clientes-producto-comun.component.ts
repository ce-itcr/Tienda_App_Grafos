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
  ListaClientes: Cliente[] = []
  newProducto: Producto = new Producto
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
    //alert("bus");
    this.service.clienteProductos(this.newProducto).subscribe(lista => {
      this.ListaClientes = lista;
      console.log(this.ListaClientes);
    })
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
