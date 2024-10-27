import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { PanierService } from 'src/app/services/panier.service'; // Ajoutez votre service de panier
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-femme',
  templateUrl: './femme.component.html',
  styleUrls: ['./femme.component.css']
})
export class FemmeComponent implements OnInit {

  produits: any[] = []; // Tous les produits récupérés
  categories: any[] = []; // Toutes les catégories récupérées
  filteredProduits: any[] = []; // Produits filtrés affichés à l'utilisateur
  selectedCategoryId: number | null = null; // ID de la catégorie sélectionnée
  selectedSousCategorieId: number | null = null; // ID de la sous-catégorie sélectionnée

 // Tous les produits récupérés

  constructor(private genreService: GenreService, private panierService: PanierService) { }

  ngOnInit(): void {
    // Optionnel: Charger les produits pour un genre par défaut au démarrage
    this.loadProduitsParGenre(1); // Par exemple, 1 pour Femme
  }

  // Charger les produits par genre
  loadProduitsParGenre(genreId: number): void {
    this.genreService.getProduitsParGenre(genreId).subscribe(
      response => {
        this.produits = response.produits;
        this.filteredProduits = [...this.produits]; // Initialisation des produits affichés
      },
      error => {
        console.error('Erreur lors du chargement des produits:', error);
      }
    );
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
