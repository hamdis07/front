import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceClientPageComponent } from './service-client-page.component';

describe('ServiceClientPageComponent', () => {
  let component: ServiceClientPageComponent;
  let fixture: ComponentFixture<ServiceClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceClientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
