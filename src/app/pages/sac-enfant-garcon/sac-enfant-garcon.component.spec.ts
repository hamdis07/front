import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacEnfantGarconComponent } from './sac-enfant-garcon.component';

describe('SacEnfantGarconComponent', () => {
  let component: SacEnfantGarconComponent;
  let fixture: ComponentFixture<SacEnfantGarconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacEnfantGarconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacEnfantGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
