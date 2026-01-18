import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CatalogoOpenLibraryComponent } from './components/catalogo-open-library/catalogo-open-library.component';
import { MiBibliotecaComponent } from './components/mi-biblioteca/mi-biblioteca.component';
import { DetalleLibroComponent } from './components/detalle-libro/detalle-libro.component';
import { AnnadirLibroComponent } from './components/annadir-libro/annadir-libro.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoOpenLibraryComponent },
  { path: 'mi-biblioteca', component: MiBibliotecaComponent },
  { path: 'libro/:id', component: DetalleLibroComponent },
  { path: 'nuevo', component: AnnadirLibroComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
