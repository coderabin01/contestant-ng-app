import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestantRatingComponent } from './contestant-rating.component';

describe('ContestantRatingComponent', () => {
  let component: ContestantRatingComponent;
  let fixture: ComponentFixture<ContestantRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestantRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestantRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
