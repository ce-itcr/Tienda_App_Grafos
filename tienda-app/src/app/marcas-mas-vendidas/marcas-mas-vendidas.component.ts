import { Component, OnInit } from '@angular/core';
import { TopMarcas } from '../Clases/TopMarcas';
import { GeneralesService } from '../Services/generales.service';

@Component({
  selector: 'app-marcas-mas-vendidas',
  templateUrl: './marcas-mas-vendidas.component.html',
  styleUrls: ['./marcas-mas-vendidas.component.css']
})
export class MarcasMasVendidasComponent implements OnInit {

  topMarcas: TopMarcas[] = []

  constructor(private service: GeneralesService) { }

  ngOnInit(): void {
    this.service.obtenerTopMarcas().subscribe(lista => {
      this.topMarcas = lista;
      console.log(this.topMarcas);
    });
  }
}
