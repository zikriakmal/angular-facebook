import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-center-side',
  standalone: true,
  imports: [],
  templateUrl: './home-center-side.component.html',
  styleUrl: './home-center-side.component.css'
})
export class HomeCenterSideComponent {
  @Output() openCreatePostModal: EventEmitter<void> = new EventEmitter<void>();

  openPostModal() {
    this.openCreatePostModal.emit();  // Emit the event to the parent
  }

}
