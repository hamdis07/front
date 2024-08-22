import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacBebeGarconComponent } from './sac-bebe-garcon.component';

describe('SacBebeGarconComponent', () => {
  let component: SacBebeGarconComponent;
  let fixture: ComponentFixture<SacBebeGarconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacBebeGarconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacBebeGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
