import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './AppModule/app.component';
import { DatosComponent } from './Datos/datos.component';
import { ManteClientesComponent } from './mante-clientes/mante-clientes.component';
import { ManteCatalogoComponent } from './mante-catalogo/mante-catalogo.component';
import { RegistroComprasComponent } from './registro-compras/registro-compras.component';
import { ProductosMasVendidosComponent } from './productos-mas-vendidos/productos-mas-vendidos.component';
import { MarcasMasVendidasComponent } from './marcas-mas-vendidas/marcas-mas-vendidas.component';
import { ClientesMasComprasComponent } from './clientes-mas-compras/clientes-mas-compras.component';
import { BusquedaClienteComponent } from './busqueda-cliente/busqueda-cliente.component';
import { ClientesProductoComunComponent } from './clientes-producto-comun/clientes-producto-comun.component';
import { ClientesCompraComunComponent } from './clientes-compra-comun/clientes-compra-comun.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    ManteClientesComponent,
    ManteCatalogoComponent,
    RegistroComprasComponent,
    ProductosMasVendidosComponent,
    MarcasMasVendidasComponent,
    ClientesMasComprasComponent,
    BusquedaClienteComponent,
    ClientesProductoComunComponent,
    ClientesCompraComunComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
