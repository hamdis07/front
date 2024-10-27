import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInformationComponent } from './modifier-information.component';

describe('ModifierInformationComponent', () => {
  let component: ModifierInformationComponent;
  let fixture: ComponentFixture<ModifierInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
