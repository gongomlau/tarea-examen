export interface Book {
  id?: number;  //ID propio de la base de datos
  openLibraryId: string; //ID de Open Library
  title: string;
  author: string;
  year?: number;
  pages?: number;
  coverUrl?: string;
  description?: string;
  // Datos añadidos por el usuario
  rating?: number; // Valoración del libro (1-5)
  review?: string; // Reseña del usuario

}
