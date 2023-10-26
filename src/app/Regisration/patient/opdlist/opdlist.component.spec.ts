import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDListComponent } from './opdlist.component';

describe('OPDListComponent', () => {
  let component: OPDListComponent;
  let fixture: ComponentFixture<OPDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPDListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OPDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
