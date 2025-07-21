import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsViewComponent } from './ingredients-view.component';

describe('IngredientsView', () => {
  let component: IngredientsViewComponent;
  let fixture: ComponentFixture<IngredientsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
