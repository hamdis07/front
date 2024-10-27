import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';
import { CommandeService } from 'src/app/services/commande.service'; // Assurez-vous d'importer le service
import { HttpClient } from '@angular/common/http'; // Import HttpClient


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  commandeForm: FormGroup;
  produits: any[] = [];
  total: number = 0;
  selectedPaymentMethod: string = 'apres_livraison';
  fraisLivraison: number = 0;  // Nouvelle variable pour les frais de livraison
  commande: any = {};  // Variable pour stocker la commande avec montant_total

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private panierService: PanierService,
    private commanderService: CommandeService // Injectez le service de commande

  ) {
    this.commandeForm = this.fb.group({
      adresse: ['', [Validators.required, Validators.maxLength(255)]],
      ville: ['', [Validators.required, Validators.maxLength(255)]],
      code_postal: ['', [Validators.required, Validators.maxLength(10)]],
      telephone: ['', [Validators.required, Validators.maxLength(20)]],
      description: [''],
      methode_paiement: ['apres_livraison', [Validators.required]],
      stripeToken: [''],
      numero_carte: [''],
      nom_detenteur_carte: [''],
      mois_validite: [''],
      annee_validite: [''],
      code_secret: [''],
      adresse_facturation: ['']
    });
  }
  ngOnInit(): void {
    const state = history.state;
    if (state && state.produits) {
      this.produits = state.produits; // Charger les produits de l'état
      this.calculateTotal(); // Appeler la méthode pour calculer le total
    } else {
      this.router.navigate(['/panier']);
    }

    this.commandeForm.get('methode_paiement')?.valueChanges.subscribe(value => {
      this.adjustValidatorsForPaymentMethod(value);
    });

    this.getFraisLivraison();
  }

  calculateTotal(): void {
    console.log('Produits:', this.produits);

    // Calculer le total des produits
    const totalProduits = this.produits.reduce((sum, produit) => {
      console.log('Produit:', produit);

      const prixTotal = parseFloat(produit.prix_total) || 0; // Assurez-vous que prix_total inclut déjà la quantité

      console.log(`Prix Total Produit: ${prixTotal}`);

      return sum + prixTotal;
    }, 0);

    console.log('Total Produits:', totalProduits);

    // Mettre à jour le total avec les frais de livraison après récupération de l'API
    this.updateFraisLivraison().then((fraisLivraison) => {
      console.log('Frais Livraison:', fraisLivraison);

      this.total = totalProduits + fraisLivraison;

      console.log('Total avec Frais Livraison:', this.total);
    });
  }

  // Simuler une méthode asynchrone pour récupérer les frais de livraison de l'API
  updateFraisLivraison(): Promise<number> {
    return new Promise((resolve) => {
      // Simuler un délai pour la récupération des frais de livraison
      setTimeout(() => {
        const fraisLivraison = 7; // Exemples de frais récupérés
        console.log('Frais de livraison mis à jour:', fraisLivraison);
        resolve(fraisLivraison);
      }, 1000); // Délai simulé
    });
  }


  getFraisLivraison(): void {
    this.commanderService.obtenirFraisLivraison().subscribe(
      (apiResponse) => {
        console.log('Réponse complète de l\'API:', apiResponse); // Afficher la réponse complète (si nécessaire)
        this.fraisLivraison = apiResponse; // Assigner directement la réponse à 'fraisLivraison'
        console.log('Frais de livraison mis à jour:', this.fraisLivraison); // Vérifie la mise à jour (peut être supprimé après vérification)
      },
      (error) => {
        console.error('Erreur lors de la récupération des frais de livraison', error);
        this.fraisLivraison = 0; // Assigner 0 en cas d'erreur
      }
    );
  }


  // calculateTotal(): void {
  //   const totalProduits = this.produits.reduce((sum, produit) => sum + produit.prix_total, 0);
  //   this.total = totalProduits + this.fraisLivraison; // Ajoute les frais de livraison au total des produits
  // }

  adjustValidatorsForPaymentMethod(methode_paiement: string): void {
    if (methode_paiement === 'par_carte') {
      this.commandeForm.get('stripeToken')?.setValue('tok_visa');  // Set a default token for testing
      this.commandeForm.get('numero_carte')?.setValidators([Validators.required, Validators.maxLength(20)]);
      this.commandeForm.get('nom_detenteur_carte')?.setValidators([Validators.required, Validators.maxLength(255)]);
      this.commandeForm.get('mois_validite')?.setValidators([Validators.required, Validators.min(1), Validators.max(12)]);
      this.commandeForm.get('annee_validite')?.setValidators([Validators.required, Validators.min(new Date().getFullYear())]);
      this.commandeForm.get('code_secret')?.setValidators([Validators.required, Validators.maxLength(4)]);
      this.commandeForm.get('adresse_facturation')?.setValidators([Validators.required, Validators.maxLength(255)]);
    }  else if (methode_paiement === 'apres_livraison') {
      // Clear validators for card details when payment method is apres_livraison
       this.clearCardValidators();
       this.resetCardFields();  // Nouvelle méthode pour réinitialiser les champs de carte

      // Supprimer les validations si la méthode de paiement n'est pas par carte

    }

    this.commandeForm.get('stripeToken')?.updateValueAndValidity();
    this.commandeForm.get('numero_carte')?.updateValueAndValidity();
    this.commandeForm.get('nom_detenteur_carte')?.updateValueAndValidity();
    this.commandeForm.get('mois_validite')?.updateValueAndValidity();
    this.commandeForm.get('annee_validite')?.updateValueAndValidity();
    this.commandeForm.get('code_secret')?.updateValueAndValidity();
    this.commandeForm.get('adresse_facturation')?.updateValueAndValidity();
  }
  resetCardFields(): void {
    this.commandeForm.get('stripeToken')?.setValue('');
    this.commandeForm.get('numero_carte')?.setValue('');
    this.commandeForm.get('nom_detenteur_carte')?.setValue('');
    this.commandeForm.get('mois_validite')?.setValue('');
    this.commandeForm.get('annee_validite')?.setValue('');
    this.commandeForm.get('code_secret')?.setValue('');
    this.commandeForm.get('adresse_facturation')?.setValue('');
  }
  clearCardValidators(): void {
    this.commandeForm.get('stripeToken')?.clearValidators();
    this.commandeForm.get('numero_carte')?.clearValidators();
    this.commandeForm.get('nom_detenteur_carte')?.clearValidators();
    this.commandeForm.get('mois_validite')?.clearValidators();
    this.commandeForm.get('annee_validite')?.clearValidators();
    this.commandeForm.get('code_secret')?.clearValidators();
    this.commandeForm.get('adresse_facturation')?.clearValidators();
  }

  onSubmit(): void {
    if (this.commandeForm.invalid) {
      return;
    }

    const commandeData = { ...this.commandeForm.value };

    // Si la méthode de paiement n'est pas par carte, retirez les informations de carte
    if (commandeData.methode_paiement !== 'par_carte') {
      delete commandeData.stripeToken;
      delete commandeData.numero_carte;
      delete commandeData.nom_detenteur_carte;
      delete commandeData.mois_validite;
      delete commandeData.annee_validite;
      delete commandeData.code_secret;
      delete commandeData.adresse_facturation;
    }

    // Ajoute les produits et les frais de livraison
    commandeData.produits = this.produits.map(produit => ({
      id: produit.produit_id,
      quantite: produit.quantite,
      taille: produit.taille,
      couleur: produit.couleur,
      fraisLivraison: this.fraisLivraison,
      total: this.total
    }));

    console.log("Commande à envoyer:", commandeData);

    this.commanderService.passerCommande(commandeData).subscribe(
      response => {
        // Si la commande a réussi
        console.log('Commande réussie', response);
        this.router.navigate(['/historique']); // Redirection vers la page de confirmation
      },
      error => {
        // Si une erreur survient
        console.error('Erreur lors de l\'envoi de la commande', error);
      }
    );
  }


    // Envoyer les données de la commande au backend (à implémenter)
    // Exemple d'appel à un service:
    // this.commandeService.envoyerCommande(commandeData).subscribe(
    //   response => {
    //     console.log('Commande réussie', response);
    //     this.router.navigate(['/confirmation']);
    //   },
    //   error => {
    //     console.error('Erreur lors de l\'envoi de la commande', error);
    //   }
    // );
  }

