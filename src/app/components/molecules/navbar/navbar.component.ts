import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


type ActiveNav = 'home' | 'video' | 'marketplace' | 'community' | 'games'

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

  activeNav: ActiveNav = 'home';

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

  changeActiveNav(newActiveNav:ActiveNav){
    this.activeNav = newActiveNav;
  }

  logout() {
    this.router.navigate(['/login', {}])
  }
}
