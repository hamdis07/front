import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniersproduitsComponent } from './paniersproduits.component';

describe('PaniersproduitsComponent', () => {
  let component: PaniersproduitsComponent;
  let fixture: ComponentFixture<PaniersproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaniersproduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaniersproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
