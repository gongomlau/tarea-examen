import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home/home.component';
import { CatalogoOpenLibraryComponent } from './components/catalogo-open-library/catalogo-open-library.component';
import { MiBibliotecaComponent } from './components/mi-biblioteca/mi-biblioteca.component';
import { DetalleLibroComponent } from './components/detalle-libro/detalle-libro.component';
import { AnnadirLibroComponent } from './components/annadir-libro/annadir-libro.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    CatalogoOpenLibraryComponent,
    MiBibliotecaComponent,
    DetalleLibroComponent,
    AnnadirLibroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
