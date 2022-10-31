import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../Services/generales.service';
import { Cliente } from '../Clases/Cliente';
import { clientesComun } from '../Clases/ClientesComun';

@Component({
  selector: 'app-clientes-compra-comun',
  templateUrl: './clientes-compra-comun.component.html',
  styleUrls: ['./clientes-compra-comun.component.css']
})
export class ClientesCompraComunComponent implements OnInit {

  cliente: Cliente = new Cliente
  listaClientes: clientesComun[] = []

  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
  }

  cargarClientesPorductosComun():void{
    this.service.obtenerClientesProductoComun(this.cliente).subscribe(lista => {
      this.listaClientes = lista;
      console.log(this.listaClientes);
    })
  }

}
