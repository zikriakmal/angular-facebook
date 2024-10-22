import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarComponent } from "../../components/molecules/navbar/navbar.component";
import { HomeCenterSideComponent } from "../../components/organisms/home-center-side/home-center-side.component";
import { HomeLeftSideComponent } from "../../components/organisms/home-left-side/home-left-side.component";
import { HomeRightSideComponent } from "../../components/organisms/home-right-side/home-right-side.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeLeftSideComponent,
    HomeCenterSideComponent,
    HomeRightSideComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isCreatePostModalOpen = false;

  constructor(private cdr: ChangeDetectorRef) { }

  openCreatePostModal(): void {
    this.isCreatePostModalOpen = true;
  }

  closeCreatePostModal(event: Event): void {
    this.isCreatePostModalOpen = false;
  }

}
