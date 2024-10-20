import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCenterSideComponent } from './home-center-side.component';

describe('HomeCenterSideComponent', () => {
  let component: HomeCenterSideComponent;
  let fixture: ComponentFixture<HomeCenterSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCenterSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCenterSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
