import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  register(form: any) {
    let userData = form.value

    this.ds.register(userData).subscribe(userData => {
      console.log(userData);
      this.router.navigate(['/compte']);
      const successMessage = document.getElementById('success-message');
      if (successMessage) {
        successMessage.style.display = 'block';
      }
    }, error => {
      console.error('Erreur lors de la création du compte', error);



    });
  }
  login(f: any) {
    if (f.valid) {
      this.ds.login(f.value).subscribe({
        next: (response) => {
          console.log('Login successful', response);


          // Afficher le message de succès
          const success = document.getElementById('success-mess');
          if (success) {
            success.style.display = 'block';
          }
        },
        error: (error) => {
          console.error('Login error', error);

        }
      });

    }
  }
}


