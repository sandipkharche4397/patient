import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDAdmissionComponent } from './opdadmission.component';

describe('OPDAdmissionComponent', () => {
  let component: OPDAdmissionComponent;
  let fixture: ComponentFixture<OPDAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
