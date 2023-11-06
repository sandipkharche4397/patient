import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPDAdmComponent } from './ipdadm.component';

describe('IPDAdmComponent', () => {
  let component: IPDAdmComponent;
  let fixture: ComponentFixture<IPDAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPDAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPDAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
