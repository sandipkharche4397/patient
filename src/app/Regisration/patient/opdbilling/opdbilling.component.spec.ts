import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDBillingComponent } from './opdbilling.component';

describe('OPDBillingComponent', () => {
  let component: OPDBillingComponent;
  let fixture: ComponentFixture<OPDBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
