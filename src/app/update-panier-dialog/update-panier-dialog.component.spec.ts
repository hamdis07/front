import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePanierDialogComponent } from './update-panier-dialog.component';

describe('UpdatePanierDialogComponent', () => {
  let component: UpdatePanierDialogComponent;
  let fixture: ComponentFixture<UpdatePanierDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePanierDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePanierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
