import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DatosComponent } from './Datos/datos.component';
import { ManteClientesComponent } from './mante-clientes/mante-clientes.component';
import { ManteCatalogoComponent } from './mante-catalogo/mante-catalogo.component';
import { RegistroComprasComponent } from './registro-compras/registro-compras.component';
import { ProductosMasVendidosComponent } from './productos-mas-vendidos/productos-mas-vendidos.component';
import { MarcasMasVendidasComponent } from './marcas-mas-vendidas/marcas-mas-vendidas.component';
import { ClientesMasComprasComponent } from './clientes-mas-compras/clientes-mas-compras.component';
import { ClientesCompraComunComponent } from './clientes-compra-comun/clientes-compra-comun.component';
import { ClientesProductoComunComponent } from './clientes-producto-comun/clientes-producto-comun.component';
import { BusquedaClienteComponent } from './busqueda-cliente/busqueda-cliente.component';

export let rutas: Routes;

rutas = [{path: '', component: NavBarComponent},
         {path: 'cargaDatos', component: DatosComponent},
         {path: 'MantenimientoClientes', component: ManteClientesComponent},
         {path: 'MantenimientoCatalogo', component: ManteCatalogoComponent},
         {path: 'RegistroCompras', component: RegistroComprasComponent},
         {path: 'Top5productos', component: ProductosMasVendidosComponent},
         {path: 'Top5Marcas', component: MarcasMasVendidasComponent},
         {path: 'Top5Clientes', component: ClientesMasComprasComponent},
         {path: 'BusquedaCliente', component: BusquedaClienteComponent},
         {path: 'ClienteProductos', component: ClientesProductoComunComponent},
         {path: 'ClienteCliente', component: ClientesCompraComunComponent},










  
  ]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
