import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your backend URL

  constructor(private http: HttpClient) { }
  getProduitById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/produits/${id}`);
  }
  getAllGenres(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genres`);
  }
  getAllProduits(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/accueil`);
  }
  getAllCategoriesWithSubcategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/souscategorie`);
  }

  filterProduits(params: any): Observable<any> {
    let queryParams = new HttpParams();

    // Ajout des différents filtres si disponibles
    if (params.souscategorie_id) {
      queryParams = queryParams.append('souscategorie_id', params.souscategorie_id);
    }
    if (params.categorie_id) {
      queryParams = queryParams.append('categorie_id', params.categorie_id);
    }
    if (params.genre_id) {
      queryParams = queryParams.append('genre_id', params.genre_id);
    }
    if (params.keyword) {
      queryParams = queryParams.append('keyword', params.keyword);
    }
    if (params.new) {
      queryParams = queryParams.append('new', params.new);
    }
    if (params.promo) {
      queryParams = queryParams.append('promo', params.promo);
    }
    if (params.popular) {
      queryParams = queryParams.append('popular', params.popular);
    }
    if (params.min_price) {
      queryParams = queryParams.append('min_price', params.min_price);
    }
    if (params.max_price) {
      queryParams = queryParams.append('max_price', params.max_price);
    }

    // Effectuer la requête HTTP GET avec les paramètres de requête
    return this.http.get<any>(`${this.apiUrl}/produits/filter`, { params: queryParams });
  }




 // Get products by genre
  getProduitsParGenre(genreId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/genre/${genreId}`);
  }

  // Get all genres

  // Get a specific genre by ID
  getGenreById(genreId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genres/${genreId}`);
  }

  // Get all products for the homepage


  // Get all categories with subcategories


  // Search products with various filters
  searchProduits(params: any): Observable<any> {
    let queryParams = new HttpParams();

    if (params.categorie_id) {
      queryParams = queryParams.append('categorie_id', params.categorie_id);
    }
    if (params.souscategorie_id) {
      queryParams = queryParams.append('souscategorie_id', params.souscategorie_id);
    }
    if (params.genre_id) {
      queryParams = queryParams.append('genre_id', params.genre_id);
    }
    if (params.min_price) {
      queryParams = queryParams.append('min_price', params.min_price);
    }
    if (params.max_price) {
      queryParams = queryParams.append('max_price', params.max_price);
    }
    if (params.color_id) {
      queryParams = queryParams.append('color_id', params.color_id);
    }
    if (params.size_id) {
      queryParams = queryParams.append('size_id', params.size_id);
    }
    if (params.keyword) {
      queryParams = queryParams.append('keyword', params.keyword);
    }
    if (params.promotions) {
      queryParams = queryParams.append('promotions', params.promotions);
    }
    if (params.top_commandes) {
      queryParams = queryParams.append('top_commandes', params.top_commandes);
    }
    if (params.nouveaux) {
      queryParams = queryParams.append('nouveaux', params.nouveaux);
    }

    return this.http.get<any>(`${this.apiUrl}/produits/recherche`, { params: queryParams });
  }

  // Get product by ID


  // Get products by category
  getProduitsParCategorie(categorieId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/categorie/${categorieId}`);
  }

  // // Get products by subcategory
  getProduitsParSousCategorie(sousCategorieId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/sous-categorie/${sousCategorieId}`);
  }

  // Get products by keyword
  getProduitsParMotCle(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/produitsParMotCle`);
  }

  // // Get new products
  getNouveauxProduits(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/nouveaux-produits`);
  }

  // // Get promotional products
  getProduitsEnPromotions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/promotions`);
  }

  // // Get most ordered products
  getProduitsLesPlusCommandes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/les-plus-commandes`);
  }

  // // Get products by genre and category
  getProduitsParGenreEtCategorie(genreId: number, categorieId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produits/genre/${genreId}/categorie/${categorieId}`);

  }
}
