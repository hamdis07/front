import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionVetementsComponent } from './description-vetements.component';

describe('DescriptionVetementsComponent', () => {
  let component: DescriptionVetementsComponent;
  let fixture: ComponentFixture<DescriptionVetementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionVetementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionVetementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
