import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { Data } from '@angular/router';
import { DatosExcel } from '../Clases/DatosExcel';



@Injectable({
  providedIn: 'root'
})
export class GeneralesService {
  Url = 'https://localhost:44341/api/';
  private valores = new BehaviorSubject('');
  public valoresActuales = this.valores.asObservable();

  constructor(private http: HttpClient,) { }


  public subirLosDatos(datosExcel: DatosExcel) {
    return this.http.post(this.Url + 'DispositivoModelo', datosExcel, { responseType: 'text' });
  }
}
