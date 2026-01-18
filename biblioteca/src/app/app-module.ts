import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

// Necesario para peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

// Necesario para usar ngModel en formularios
import { FormsModule } from '@angular/forms';

// Componentes
import { App } from './app';
import { HomeComponent } from './components/home/home.component';
import { CatalogoOpenLibraryComponent } from './components/catalogo-open-library/catalogo-open-library.component';
import { MiBibliotecaComponent } from './components/mi-biblioteca/mi-biblioteca.component';
import { DetalleLibroComponent } from './components/detalle-libro/detalle-libro.component';
import { AnnadirLibroComponent } from './components/annadir-libro/annadir-libro.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CatalogoOpenLibraryComponent,
    MiBibliotecaComponent,
    DetalleLibroComponent,
    AnnadirLibroComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
