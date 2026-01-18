import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class OpenLibraryService {
  // URL base de la API de Open Library
  private apiUrl = 'https://openlibrary.org/search.json';

  // Imagen por defecto para libros sin portada
  private defaultCover = '/img/default-cover.jpg';

  constructor(private http: HttpClient) {}

  /**
   * Busca libros en OpenLibrary según un término de búsqueda.
   * @param query - Texto introducido por el usuario (título, autor, etc.)
   * @returns Observable<Book[]> - Lista de libros ya mapeados a la interfaz Book
   */
  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<any>(`${this.apiUrl}?q=${query}`).pipe(
      // Transformamos la respuesta de la API en un array de Book
      map(response => response.docs.map((doc: any) => this.mapToBook(doc)))
    );
  }

  /**
   * Convierte un resultado de OpenLibrary en un objeto Book.
   * @param doc - Objeto individual devuelto por OpenLibrary
   * @returns Book - Objeto adaptado a la interfaz
   */
  private mapToBook(doc: any): Book {
    return {
      openLibraryId: doc.key, // ID propio de OpenLibrary (ej: "/works/OL12345W")
      title: doc.title,
      author: doc.author_name?.[0] || 'Autor desconocido', // Si no hay autor, ponemos uno genérico
      // Si existe cover_i, construimos la URL de la portada
      // Si no, usamos la imagen por defecto
      coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` : this.defaultCover,
      year: doc.first_publish_year,
      pages: doc.number_of_pages_median,
      description: doc.subtitle || '' // OpenLibrary no siempre da descripción
    };
  }
}
