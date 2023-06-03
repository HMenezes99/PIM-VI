import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service.service';
import 'firebase/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email!: string;
  password!: string;
  error = false;
  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      await this.authService.login({
        email: this.email,
        password: this.password,
      });

      this.router.navigate(['/home']);
    } catch (error) {
      alert('Erro ao realizar login');
    }
  }
}
