import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireEnfantFilleComponent } from './accessoire-enfant-fille.component';

describe('AccessoireEnfantFilleComponent', () => {
  let component: AccessoireEnfantFilleComponent;
  let fixture: ComponentFixture<AccessoireEnfantFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireEnfantFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoireEnfantFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
