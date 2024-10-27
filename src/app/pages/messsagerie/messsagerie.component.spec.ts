import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesssagerieComponent } from './messsagerie.component';

describe('MesssagerieComponent', () => {
  let component: MesssagerieComponent;
  let fixture: ComponentFixture<MesssagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesssagerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesssagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
