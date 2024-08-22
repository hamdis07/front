import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemiseFemmeComponent } from './chemise-femme.component';

describe('ChemiseFemmeComponent', () => {
  let component: ChemiseFemmeComponent;
  let fixture: ComponentFixture<ChemiseFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemiseFemmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemiseFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
