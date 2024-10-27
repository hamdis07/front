import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniermodifierComponent } from './paniermodifier.component';

describe('PaniermodifierComponent', () => {
  let component: PaniermodifierComponent;
  let fixture: ComponentFixture<PaniermodifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaniermodifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaniermodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
