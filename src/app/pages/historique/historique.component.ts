import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css'],
})
export class HistoriqueComponent implements OnInit {
  commandes: any[] = [];  // Mise à jour pour gérer plusieurs commandes

  constructor(private commandeService: CommandeService, private router: Router) {}

  ngOnInit(): void {
    this.commandeService.obtenirHistoriqueDachat().subscribe(
      (response) => {
        this.commandes = response.commandes;
        console.log(this.commandes); // Debugging purpose
      },
      (error) => {
        if (error.status === 401) {
          console.error('Vous devez être connecté pour voir votre historique d\'achat.');
          this.router.navigate(['/login']); // Redirect to login if not authenticated
        } else if (error.status === 404) {
          console.error('Aucune commande trouvée pour cet utilisateur.');
        } else {
          console.error('Erreur lors de la récupération de l\'historique d\'achat:', error);
        }
      }
    );
  }
}
