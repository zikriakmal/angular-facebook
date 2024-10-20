import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRightSideComponent } from './home-right-side.component';

describe('HomeRightSideComponent', () => {
  let component: HomeRightSideComponent;
  let fixture: ComponentFixture<HomeRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRightSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
