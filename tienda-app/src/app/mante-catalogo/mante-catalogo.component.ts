import { Component, OnInit } from '@angular/core';
import { Producto } from '../Clases/Producto';
import { GeneralesService } from '../Services/generales.service';

@Component({
  selector: 'app-mante-catalogo',
  templateUrl: './mante-catalogo.component.html',
  styleUrls: ['./mante-catalogo.component.css']
})
export class ManteCatalogoComponent implements OnInit {

  constructor(private service: GeneralesService) { }

  producto: Producto = new Producto
  listaProductos: Producto[] = []
  productoAcutal: Producto = new Producto

  ngOnInit(): void {
    this.service.obtenerListaProductos().subscribe(lista => {
      this.listaProductos = lista;
      console.log(this.listaProductos);
    });
  }

  public obtenerInformacionItem(producto: Producto): void {
    this.productoAcutal = producto;
  }

  public crearNuevoProducto(producto: Producto): void {
    console.log(producto);
    this.service.crearProducto(producto).subscribe(respuesta => {
      console.log(respuesta);
      if (respuesta === 'tipo ya existe') {
        alert('Ya existe un tipo de dispositivo con este nombre');
      } else {
        this.ngOnInit();
      }
    });
  }
  public editarProducto(producto: Producto): void {
    console.log(producto);
    this.service.editarProducto(producto).subscribe(respuesta => {
      if (respuesta === 'el dispositivo ya ha sido comprado') {
        alert('No se puede editar este dispositivo puesto que ya ha sido comprado');
      } else {
        this.ngOnInit();
      }
    });
  }

  public eliminarProducto(producto: Producto): void {
    this.service.eliminarProducto(producto).subscribe(respuesta => {
      console.log(respuesta);
      if (respuesta === 'tipo tiene registrado un dispositivo comprado') {
        alert('No puede eliminar este tipo de dispositivo puesto tiene algun dispositivo que ya ha sido comprado por algun usuario');
      } else {
        this.ngOnInit();
      }
    });
  }

}
