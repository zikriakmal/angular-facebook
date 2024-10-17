import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  goToLogin(): void {
    this.router.navigate(['/login', {}]);
  }
}
