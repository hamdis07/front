import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'e-commerce';
  constructor(private DataService: DataService, private router: Router) {}

  onLogout(): void {
    this.DataService.logout().subscribe(
      (response: any) => {
        console.log(response.message);
        // Redirect to the login page after logout
        this.router.navigate(['/compte']);
      },
      (error: any) => {
        console.error('Error during logout:', error);
      }
    );
  }
}
