import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { infoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-modifier-information',
  templateUrl: './modifier-information.component.html',
  styleUrls: ['./modifier-information.component.css'],
})
export class ModifierInformationComponent implements OnInit {
  modifierForm: FormGroup;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: infoService,
    private router: Router
  ) {
    this.modifierForm = this.fb.group({
      nom: ['', [Validators.maxLength(255)]],
      prenom: ['', [Validators.maxLength(255)]],
      genre: ['', [Validators.pattern(/^(Male|Female|Other)$/)]],
      date_de_naissance: [''],
      Addresse: ['', [Validators.maxLength(255)]],
      occupation: ['', [Validators.maxLength(255)]],
      etat_social: ['', [Validators.maxLength(255)]],
      numero_telephone: ['', [Validators.maxLength(255)]],
      user_name: ['', [Validators.maxLength(255)]],
      email: ['', [Validators.email, Validators.maxLength(255)]],
      password: ['', [Validators.minLength(8)]],
      password_confirmation: ['', [Validators.minLength(8)]], // Use a different name for confirmation
      current_password: ['', [Validators.required]],
      user_image: [null],
    },
    { validators: this.passwordMatchValidator }
    ); // Add custom validator
  }

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    this.userService.consulterCoordonnees().subscribe({
      next: (response) => {
        const user = response.user;
        this.modifierForm.patchValue(user);
      },
      error: (err) => {
        console.error(err);
        this.error = 'Erreur lors du chargement des informations utilisateur.';
      }
    });
  }

  passwordMatchValidator(form: FormGroup): { mismatch: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('password_confirmation')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];

    if (!file) {
      this.modifierForm.patchValue({ user_image: null });
      this.error = null;
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      this.error = 'Le fichier doit être une image (jpeg, png, jpg, gif).';
      this.modifierForm.patchValue({ user_image: null });
    } else {
      this.modifierForm.patchValue({ user_image: file });
      this.error = null;
    }
  }

  onSubmit(): void {
    if (this.modifierForm.invalid) {
      this.error = 'Veuillez corriger les erreurs dans le formulaire.';
      return;
    }

    const formData = new FormData();

    // Append fields except the image if not modified
    Object.keys(this.modifierForm.controls).forEach(key => {
      if (key !== 'user_image') {
        const value = this.modifierForm.get(key)?.value;
        formData.append(key, value);
      }
    });

    // Append image only if modified
    if (this.modifierForm.get('user_image')?.value) {
      formData.append('user_image', this.modifierForm.get('user_image')?.value);
    }

    this.userService.modifierCoordonnees(formData).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.error = null;
        setTimeout(() => {
          this.router.navigate(['/consulter']);
        }, 2000);
      },
      error: (err) => {
        this.error = err.error.message || 'Erreur lors de la mise à jour des informations.';
        if (err.error.errors) {
          console.error('Validation errors:', err.error.errors);
        }
        this.successMessage = null;
      }
    });
  }
}
