import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

interface LoginResponse {
  token: string;
  // Ajoutez d'autres propriétés si nécessaire
}

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  rememberMe: boolean = false;
  acceptTerms: boolean = false;
  receivePromos: boolean = false;
  user: any = {};  // Assurez-vous que `user` est initialisé comme un objet vide
  selectedFile: File | null = null; // Initialisation de `selectedFile` à `null` par défaut
  errors: string[] = []; // Pour stocker les erreurs de validation

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {}

  registre() {
    const formData = new FormData();
    for (const key in this.user) {
      if (Object.prototype.hasOwnProperty.call(this.user, key)) {
        formData.append(key, this.user[key]);
      }
    }
    if (this.selectedFile) {
      formData.append('user_image', this.selectedFile);
    }

    this.ds.register(formData).subscribe(
      (response: any) => {
        if (response.message === 'User Created') {
          // Afficher un message de succès
          alert('Votre compte a été créé avec succès.');

          // Rediriger vers le formulaire de connexion
          this.router.navigate(['/compte']).then(() => {
            // Utilisez un petit délai pour garantir que l'élément est présent
            setTimeout(() => {
              const loginFormElement = document.getElementById('login-form');
              if (loginFormElement) {
                loginFormElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 500); // Ajustez le délai selon le besoin
          });
        } else {
          this.errors = response.errors || [];
          console.error('Errors:', this.errors);
        }
      },
      error => {
        console.error('Error:', error);
        if (error.status === 422) {
          this.errors = error.error.errors
            ? Object.values(error.error.errors).flat() as string[]
            : ['Unknown error'];
        } else {
          this.errors = ['Registration failed. Please try again.'];
        }
      }
    );
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    } else {
      this.selectedFile = null; // Réinitialiser si aucun fichier n'est sélectionné
    }
  }

  login(f: any) {
    if (f.valid) {
      this.ds.login(f.value).subscribe({
        next: (response: LoginResponse) => {  // Utilisation de l'interface `LoginResponse`
          console.log('Login successful', response);
          localStorage.setItem('authToken', response.token); // Assurez-vous que `response.token` est correct

          // Afficher le message de succès
          const successMessage = document.getElementById('success-mess');
          if (successMessage) {
            successMessage.style.display = 'block';
          }

          // Rediriger vers une autre page
          this.router.navigate(['/accueil']);  // Remplacez '/accueil' par l'URL de votre choix
        },
        error: (error) => {
          console.error('Login error', error);
        }
      });
    }
  }
}
