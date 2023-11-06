import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdbillingComponent } from './ipdbilling.component';

describe('IpdbillingComponent', () => {
  let component: IpdbillingComponent;
  let fixture: ComponentFixture<IpdbillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdbillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
