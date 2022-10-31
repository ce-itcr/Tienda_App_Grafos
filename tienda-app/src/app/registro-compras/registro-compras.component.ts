import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clases/Cliente';
import { Producto } from '../Clases/Producto';
import { Compra } from '../Clases/Compra';
import { GeneralesService } from '../Services/generales.service';

@Component({
  selector: 'app-registro-compras',
  templateUrl: './registro-compras.component.html',
  styleUrls: ['./registro-compras.component.css']
})
export class RegistroComprasComponent implements OnInit {

  cliente: Cliente = new Cliente
  listaClientes: Cliente[] = []
  listaProductos: Producto[] = []
  productoAcutal: Producto = new Producto
  compra: Compra = new Compra
  listaCompra: Compra[] = []

  constructor(private service: GeneralesService) { }



  ngOnInit(): void {
    this.service.obtenerListaProductos().subscribe(lista => {
      this.listaProductos = lista;
      console.log(this.listaProductos);
    });
    this.service.obtenerListaCliente().subscribe(lista => {
      this.listaClientes = lista;
      console.log(this.listaClientes);
    });
  }

  public obtenerInformacionItem(producto: Producto): void {
    this.productoAcutal = producto;
  }

  public AgregarListaCompra(){
    this.compra.clientId = this.cliente.clientId
    this.compra.idProducto = this.productoAcutal.productId
    this.listaCompra.concat(this.compra)
  }

  public FinalizarCompra(){
    console.log(this.listaCompra);
    this.service.relizarCompra(this.listaCompra).subscribe(respuesta => {
      console.log(respuesta);
      if (respuesta === 'tipo ya existe') {
        alert('Ya existe un tipo de dispositivo con este nombre');
      } else {
        alert('Compra realizada con exito');
        }
    });
  }

}
