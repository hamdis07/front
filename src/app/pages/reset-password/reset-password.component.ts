import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  token: string;

  constructor(
    private fb: FormBuilder,
    private resetPasswordService: ResetPasswordService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Capture the token from the URL
    this.token = this.route.snapshot.queryParams['token'] || '';

    // Initialize the form with the token
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required]],
      token: [this.token, Validators.required] // Set the token in the form
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.resetPasswordService.resetPassword(this.resetPasswordForm.value).subscribe(
        (response) => {
          alert('Password reset successful');
          this.router.navigate(['/login']); // Redirect to login after success
        },
        (error) => {
          alert('Error resetting password');
        }
      );
    }
  }
}
