import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../Services/generales.service';
import { DatosExcel } from '../Clases/DatosExcel';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  datosExcel: DatosExcel = new DatosExcel;
  url: any;


  constructor(private service: GeneralesService) { }

  ngOnInit(): void {}

  public print(): void{
    console.log(this.datosExcel)
  }

  public creatDataBase(datosExcel: DatosExcel){
    this.datosExcel.path = 'C:\\Sources'
    this.service.subirLosDatos(datosExcel).subscribe(respuesta => {
      if(respuesta == 'Algo'){
        alert('Ocurrio algun fallo')
      }else {
        this.ngOnInit();
      }
    })
  }

}
