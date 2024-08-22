import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoireBebeFilleComponent } from './accessoire-bebe-fille.component';

describe('AccessoireBebeFilleComponent', () => {
  let component: AccessoireBebeFilleComponent;
  let fixture: ComponentFixture<AccessoireBebeFilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoireBebeFilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoireBebeFilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
