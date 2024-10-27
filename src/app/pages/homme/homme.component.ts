import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { PanierService } from 'src/app/services/panier.service'; // Ajoutez votre service de panier
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {


  genreId: number = 1; // ID du genre Homme
  produits: any[] = []; // Tous les produits récupérés
  categories: any[] = []; // Toutes les catégories récupérées
  filteredProduits: any[] = []; // Produits filtrés affichés à l'utilisateur
  selectedCategoryId: number | null = null; // ID de la catégorie sélectionnée
  selectedSousCategorieId: number | null = null; // ID de la sous-catégorie sélectionnée

  constructor(private genreService: GenreService, private panierService: PanierService) { }

  ngOnInit(): void {
    this.loadProduitsParGenre();
  }

  // Charger les produits par genre
  loadProduitsParGenre(): void {
    this.genreService.getProduitsParGenre(this.genreId).subscribe(
      response => {
        this.produits = response.produits;
        this.categories = this.extractCategories(response.produits);
        this.filteredProduits = [...this.produits]; // Initialisation des produits affichés
      },
      error => {
        console.error('Erreur lors du chargement des produits:', error);
      }
    );
  }

  // Extraire les catégories des produits
  extractCategories(produits: any[]): any[] {
    const categoriesMap = new Map();
    produits.forEach(produit => {
      if (!categoriesMap.has(produit.categorie_id)) {
        categoriesMap.set(produit.categorie_id, {
          id: produit.categorie_id,
          nom: produit.categories.nom,
          sousCategories: produit.sousCategories || [], // Initialiser les sous-catégories si elles sont nulles
          showSubCategories: false // Pour gérer l'affichage des sous-catégories
        });
      }
    });
    return Array.from(categoriesMap.values());
  }

  // Basculer l'affichage des sous-catégories
  toggleSubCategories(categoryId: number) {
    const category = this.categories.find(cat => cat.id === categoryId);
    if (category) {
      category.showSubCategories = !category.showSubCategories;
    }
  }

  // Filtrer par catégorie
  filterByCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.selectedSousCategorieId = null; // Réinitialiser la sous-catégorie
    this.filteredProduits = this.produits.filter(produit => produit.categorie_id === categoryId);
  }

  // Filtrer par sous-catégorie
  filterBySousCategorie(sousCategorieId: number): void {
    this.selectedSousCategorieId = sousCategorieId;
    this.filteredProduits = this.produits.filter(produit => produit.souscategories_id === sousCategorieId);
  }

  // Obtenir l'URL de l'image du produit
  getImageUrl(imageUrl: string): string {
    if (!imageUrl || imageUrl === '') {
      return '/assets/default-image.png'; // Lien vers une image par défaut si l'URL est vide
    }
    return imageUrl; // Utilise directement l'URL stockée dans la base de données
  }

  // Ajouter un produit au panier
  addToCart(produit: any): void {
    const requestPayload = {
      taille: 'M', // Par exemple, vous pouvez changer ceci
      couleur: 'Rouge', // Par exemple, vous pouvez changer ceci
      quantite: 1
    };

    this.panierService.ajouterProduitAuPanier(produit.id, requestPayload).subscribe(
      response => {
        console.log('Produit ajouté au panier:', response);
      },
      error => {
        console.error('Erreur lors de l\'ajout du produit au panier:', error);
      }
    );
  }
}
