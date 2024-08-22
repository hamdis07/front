import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacHommeComponent } from './sac-homme.component';

describe('SacHommeComponent', () => {
  let component: SacHommeComponent;
  let fixture: ComponentFixture<SacHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacHommeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
