import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { Data } from '@angular/router';
import { DatosExcel } from '../Clases/DatosExcel';
import { Cliente } from '../Clases/Cliente';
import { clientesComun } from '../Clases/ClientesComun';



@Injectable({
  providedIn: 'root'
})
export class GeneralesService {
  Url = 'https://localhost:44338/api/';
  private valores = new BehaviorSubject('');
  public valoresActuales = this.valores.asObservable();

  constructor(private http: HttpClient,) { }


  public subirLosDatos(datosExcel: DatosExcel) {
    return this.http.post(this.Url + 'data/store', datosExcel, { responseType: 'text' });
  }

  public crearCliente(cliente: Cliente){
    return this.http.post(this.Url + 'client/create', cliente, { responseType: 'text' });
  }

  public editarCliente(cliente: Cliente){
    return this.http.post(this.Url + 'client/update', cliente, { responseType: 'text' });
  }

  public eliminarCliente(cliente: Cliente){
    return this.http.post(this.Url + 'client/delete', cliente, { responseType: 'text' });
  }

  public obtenerListaCliente() {
    return this.http.get<Cliente[]>(this.Url + 'client/get');
  }




}
