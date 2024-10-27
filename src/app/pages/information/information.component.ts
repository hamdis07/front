import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { infoService } from 'src/app/services/info.service'; // Adjust the import based on your file structure

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  user: any; // Type this according to your user model
  error: string | null = null;

  constructor(private userService: infoService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    this.userService.consulterCoordonnees().subscribe({
      next: (response) => {
        this.user = response.user;
      },
      error: (err) => {
        this.error = 'Erreur lors de la récupération des informations utilisateur.';
        console.error(err);
      }
    });
  }

  // Navigate to the modification page
  goToModifier(): void {
    this.router.navigate(['/modifiercoordonne']); // Adjust the route based on your routing setup
  }
}
