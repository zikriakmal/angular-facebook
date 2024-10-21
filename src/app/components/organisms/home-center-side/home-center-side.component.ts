import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-center-side',
  standalone: true,
  imports: [],
  templateUrl: './home-center-side.component.html',
  styleUrl: './home-center-side.component.css'
})
export class HomeCenterSideComponent {
  @Input() openCreatePostModal?: void;

  openPostModal() {
    this.openCreatePostModal
  }
}