import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PanierService } from 'src/app/services/panier.service';
//import { UpdatePanierDialogComponent } from 'src/app/update-panier-dialog/update-panier-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: any[] = [];
  isEmpty: boolean = true;


  constructor(
    private panierService: PanierService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router // Inject Router
  ) { }

  ngOnInit(): void {
    this.consulterPanier();
  }

  consulterPanier(): void {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Utilisateur non authentifié. Rediriger vers la page de connexion.');
      return;
    }

    this.panierService.consulterPanier().subscribe(
      (response: any) => {
        console.log("Réponse du panier:", response); // Vérifiez ici que chaque produit a un produit_id
        this.panier = response.panier;
        this.isEmpty = this.panier.length === 0;
      },
      (error: any) => {
        if (error.status === 401) {
          console.error('Utilisateur non authentifié. Rediriger vers la page de connexion.');
        } else {
          console.error('Erreur lors de la consultation du panier', error);
        }
      }
    );
  }

  retirerDuPanier(produitId: number): void {
    // Confirmation before deletion (optional)
    const confirmation = confirm("Êtes-vous sûr de vouloir retirer ce produit du panier ?");
    if (!confirmation) {
      return;
    }

    // Call service to remove the product from the cart
    this.panierService.retirerDuPanier(produitId).subscribe(
      () => {
        // Remove only the product with the matching produit_id from the panier array
        this.panier = this.panier.filter(produit => produit.produit_id !== produitId);

        // Check if the cart is empty after deletion
        this.isEmpty = this.panier.length === 0;

        // Show success message (optional)
        this.snackBar.open('Produit retiré du panier', 'Fermer', { duration: 2000 });
      },
      (error: any) => {
        // Handle error when product removal fails
        console.error('Erreur lors du retrait du produit du panier', error);
        this.snackBar.open('Erreur lors du retrait du produit', 'Fermer', { duration: 2000 });
      }
    );
  }

  // openUpdateDialog(produit: any): void {
  //   const dialogRef = this.dialog.open(UpdatePanierDialogComponent, {
  //     width: '400px',
  //     data: {
  //       produit_id: produit.produit_id,
  //       taille: produit.taille,
  //       couleur: produit.couleur,
  //       quantite: produit.quantite
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.mettreAJourPanier(result.produit_id, result.taille, result.couleur, result.quantite);
  //       this.snackBar.open('Panier mis à jour', 'Fermer', { duration: 2000 });
  //     } else {
  //       console.log('Aucune mise à jour effectuée.');
  //     }
  //   });
  // }

  mettreAJourPanier(produitId: number, taille: string, couleur: string, quantite: number): void {
    const productData = {
      produit_id: produitId,
      taille: taille,
      couleur: couleur,
      quantite: quantite
    };

    this.panierService.mettreAJourPanier(produitId, productData).subscribe(
      () => {
        // Mettre à jour le panier après la mise à jour
        this.consulterPanier();

        // Naviguer vers la route /modifier
        this.router.navigate(['/panier/modifier', produitId]);
      },
      (error: any) => {
        console.error('Erreur lors de la mise à jour du produit dans le panier', error);
        this.snackBar.open('Erreur lors de la mise à jour du produit', 'Fermer', { duration: 2000 });
      }
    );
  }

  hasSelectedProducts(): boolean {
    selected: false // Ajoutez une propriété pour suivre la sélection

    return this.panier.some(produit => produit.selected);
  }

  passerCommande(): void {
    // Filter only the selected products
    const produitsACommander = this.panier.filter(produit => produit.selected);
    console.log("Produits sélectionnés:", produitsACommander);

    if (produitsACommander.length === 0) {
      this.snackBar.open("Aucun produit sélectionné pour la commande.", 'Fermer', { duration: 2000 });
      return;
    }

    // Navigate to the "commander" route with the selected products
    this.router.navigate(['/commander'], { state: { produits: produitsACommander } });
  }
}
