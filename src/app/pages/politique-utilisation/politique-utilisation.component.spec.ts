import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueUtilisationComponent } from './politique-utilisation.component';

describe('PolitiqueUtilisationComponent', () => {
  let component: PolitiqueUtilisationComponent;
  let fixture: ComponentFixture<PolitiqueUtilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolitiqueUtilisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolitiqueUtilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
