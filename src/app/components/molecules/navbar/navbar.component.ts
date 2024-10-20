import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  isOpen = false;
  isAnimating = false;

  toggleDropdown() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.isAnimating = true;
    } else {
      this.isAnimating = true;
      this.isOpen = false;
    }
  }

  onTransitionEnd() {
    if (!this.isOpen) {
      this.isAnimating = false; // Remove from DOM after close animation
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.dropdown'); // Use your actual dropdown class or element selector
    const profileButton = document.querySelector('.profile-button');
    if (this.isOpen && dropdown && !dropdown.contains(target) && profileButton && !profileButton.contains(target)) {
      this.isAnimating = true;
      this.isOpen = false;
    }
  }

  logout() {
    this.router.navigate(['/login', {}])
  }
}
