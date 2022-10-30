import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Clases/Cliente';
import { GeneralesService } from '../Services/generales.service';

@Component({
  selector: 'app-mante-clientes',
  templateUrl: './mante-clientes.component.html',
  styleUrls: ['./mante-clientes.component.css']
})
export class ManteClientesComponent implements OnInit {

  cliente: Cliente = new Cliente
  listaClientes: Cliente[] = []
  clienteAcutal: Cliente = new Cliente
  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
  }

  public print(){
    console.log(this.cliente);
  }

  public crearNuevoCliente(cliente: Cliente): void {
    console.log(cliente);
    this.service.crearCliente(cliente).subscribe(respuesta => {
      console.log(respuesta);
      if (respuesta === 'tipo ya existe') {
        alert('Ya existe un tipo de dispositivo con este nombre');
      } else {
        this.ngOnInit();
      }
    });
  }

  public obtenerInformacionItem(cliente: Cliente): void {
    this.clienteAcutal = cliente;
  }

  public editarCliente(cliente: Cliente): void {
    console.log(cliente);
    this.service.editarCliente(cliente).subscribe(respuesta => {
      if (respuesta === 'el dispositivo ya ha sido comprado') {
        alert('No se puede editar este dispositivo puesto que ya ha sido comprado');
      } else {
        this.ngOnInit();
      }
    });
  }

  public eliminarCliente(cliente: Cliente): void {
    this.service.eliminarCliente(cliente).subscribe(respuesta => {
      console.log(respuesta);
      if (respuesta === 'tipo tiene registrado un dispositivo comprado') {
        alert('No puede eliminar este tipo de dispositivo puesto tiene algun dispositivo que ya ha sido comprado por algun usuario');
      } else {
        this.ngOnInit();
      }
    });
  }
}
