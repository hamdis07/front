import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { PanierService } from 'src/app/services/panier.service';

// Define interfaces for size and color objects
interface Size {
  nom: string;
  quantite: number;
}

interface Color {
  nom: string;
}

interface Selection {
  taille: string;
  couleur: string;
  quantite: number;
}

@Component({
  selector: 'app-paniermodifier',
  templateUrl: './paniermodifier.component.html',
  styleUrls: ['./paniermodifier.component.css']
})
export class PaniermodifierComponent implements OnInit {
  produit: any; // Pour stocker les détails du produit
  error: string | null = null; // Pour gérer les erreurs
  quantite: number = 1; // Quantité par défaut à ajouter
  taille: string = ''; // Taille sélectionnée
  couleur: string = ''; // Couleur sélectionnée
  couleursDisponibles: Color[] = []; // Liste des couleurs disponibles
  taillesDisponibles: Size[] = []; // Liste des tailles disponibles
  imagesDisponibles: string[] = []; // Liste des images disponibles
  currentIndex: number = 0; // Index de l'image affichée
  rotateAngle = 0; // Variable pour stocker l'angle de rotation de l'image
  isFlashing = false; // Variable pour l'effet flash
  isZoomed = false; // Variable pour gérer le zoom de l'image
  selections: Selection[] = []; // Liste des sélections (taille, couleur, quantité)

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    this.chargerDetailsProduit();
  }

  chargerDetailsProduit() {
    const produitId = +this.route.snapshot.paramMap.get('id')!;
    this.dataService.getProductById(produitId).subscribe({
      next: (data) => {
        this.produit = data.produit; // Assigner les détails du produit récupéré

        // Assigner les couleurs disponibles
        this.couleursDisponibles = this.produit.quantitedisponible.map((q: any) => q.couleurs)
          .filter((value: any, index: number, self: any) =>
            index === self.findIndex((t: any) => t.nom === value.nom)
          );

        // Assigner les tailles disponibles
        this.taillesDisponibles = this.produit.quantitedisponible.map((q: any) => q.tailles)
          .filter((value: any, index: number, self: any) =>
            index === self.findIndex((t: any) => t.nom === value.nom)
          );

        // Assigner les images disponibles
        this.imagesDisponibles = this.produit.images.map((image: any) => image.chemin_image);
      },
      error: (err) => {
        this.error = err.error.message || 'Erreur lors du chargement du produit.';
        console.error('Erreur lors du chargement du produit:', this.error);
      }
    });
  }

  // Ajouter une nouvelle sélection (taille, couleur, quantite)
  ajouterNouvelleSelection() {
    this.selections.push({
      taille: '',
      couleur: '',
      quantite: 1
    });
  }

  // Supprimer une sélection
  supprimerSelection(index: number) {
    this.selections.splice(index, 1);
  }

  // Mettre à jour les sélections de tailles, couleurs, et quantités dans le panier
  mettreAJourProduitDansPanier() {
    if (!this.selections.length) {
      alert('Veuillez ajouter au moins une sélection de taille, couleur et quantité.');
      return;
    }

    this.selections.forEach(selection => {
      if (!selection.taille || !selection.couleur) {
        alert('Veuillez sélectionner une taille et une couleur.');
        return;
      }

      const requestPayload = {
        taille: selection.taille,
        couleur: selection.couleur,
        quantite: selection.quantite
      };

      this.panierService.mettreAJourPanier(this.produit.id, requestPayload).subscribe({
        next: (response: any) => {
          console.log('Produit mis à jour dans le panier:', response);
          alert(response.message || 'Produit mis à jour dans le panier avec succès!');
        },
        error: (error: any) => {
          console.error('Erreur lors de la mise à jour du panier:', error);
          alert(error.error.message || 'Erreur lors de la mise à jour du panier.');
        }
      });
    });
  }

  // Fonction pour afficher l'image suivante
  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imagesDisponibles.length;
    this.produit.image_url = this.imagesDisponibles[this.currentIndex];
  }

  // Fonction pour afficher l'image précédente
  showPreviousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.imagesDisponibles.length) % this.imagesDisponibles.length;
    this.produit.image_url = this.imagesDisponibles[this.currentIndex];
  }

  // Fonction pour faire pivoter l'image
  rotateImage() {
    this.rotateAngle += 90;
    if (this.rotateAngle === 360) {
      this.rotateAngle = 0;
    }
  }

  // Effet flash sur l'image
  flashImage() {
    this.isFlashing = true;
    setTimeout(() => {
      this.isFlashing = false;
    }, 500);
  }

  // Activer/désactiver le zoom sur l'image
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
