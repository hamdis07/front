import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullHommeComponent } from './pull-homme.component';

describe('PullHommeComponent', () => {
  let component: PullHommeComponent;
  let fixture: ComponentFixture<PullHommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullHommeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PullHommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
