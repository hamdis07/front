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
  selector: 'app-paniersproduits',
  templateUrl: './paniersproduits.component.html',
  styleUrls: ['./paniersproduits.component.css']
})
export class PaniersproduitsComponent implements OnInit {
  produit: any; // Pour stocker les détails du produit
  error: string | null = null; // Pour gérer les erreurs
  quantite: number = 1; // Quantité par défaut à ajouter
  taille: string = ''; // Taille sélectionnée
  couleur: string = ''; // Couleur sélectionnée
  couleursDisponibles: Color[] = []; // Liste des couleurs disponibles
  taillesDisponibles: Size[] = []; // Liste des tailles disponibles
  quantitesDisponibles: any[] = []; // Pour stocker les quantités disponibles
  items = [];
  rotateAngle = 0;
  isFlashing = false;
  isZoomed = false; // Variable to store the current rotation angle
  imagesDisponibles: string[] = [];
  currentIndex: number = 0;
  selections: Selection[] = []; // Liste des sélections multiples

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
        this.couleursDisponibles = this.produit.quantitedisponible.map((q: any) => q.couleurs).filter((value: any, index: number, self: any) =>
          index === self.findIndex((t: any) => t.nom === value.nom)
        );

        // Assigner les tailles disponibles
        this.taillesDisponibles = this.produit.quantitedisponible.map((q: any) => q.tailles).filter((value: any, index: number, self: any) =>
          index === self.findIndex((t: any) => t.nom === value.nom)
        );

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

  // Ajouter les sélections de tailles, couleurs, et quantités au panier
  ajouterProduitAuPanier() {
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

      this.panierService.ajouterProduitAuPanier(this.produit.id, requestPayload).subscribe({
        next: (response: any) => {
          console.log('Produit ajouté au panier:', response);
          alert(response.message || 'Produit ajouté au panier avec succès!');
        },
        error: (error: any) => {
          console.error('Erreur lors de l\'ajout au panier:', error);
          alert(error.error.message || 'Erreur lors de l\'ajout au panier.');
        }
      });
    });
  }

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.imagesDisponibles.length;
    this.produit.image_url = this.imagesDisponibles[this.currentIndex];
  }

  showPreviousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.imagesDisponibles.length) % this.imagesDisponibles.length;
    this.produit.image_url = this.imagesDisponibles[this.currentIndex];
  }

  rotateImage() {
    this.rotateAngle += 90;
    if (this.rotateAngle === 360) {
      this.rotateAngle = 0;
    }
  }

  flashImage() {
    this.isFlashing = true;
    setTimeout(() => {
      this.isFlashing = false;
    }, 500);
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
