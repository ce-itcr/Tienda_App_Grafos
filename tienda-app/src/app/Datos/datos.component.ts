import { Component, OnInit } from '@angular/core';
import { GeneralesService } from '../Services/generales.service';
import { DatosExcel } from '../Clases/DatosExcel';



@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  datosExcel: DatosExcel = new DatosExcel;
  

  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
  }

  public print(): void{
    console.log(this.datosExcel.path)
  }

  public creatDataBase(datosExcel: DatosExcel){
    this.service.subirLosDatos(datosExcel).subscribe(respuesta => {
      if(respuesta == 'Algo'){
        alert('Ocurrio algun fallo')
      }else {
        this.ngOnInit();
      }
    })
  }

}
