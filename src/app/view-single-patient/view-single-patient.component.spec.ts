import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSinglePatientComponent } from './view-single-patient.component';

describe('ViewSinglePatientComponent', () => {
  let component: ViewSinglePatientComponent;
  let fixture: ComponentFixture<ViewSinglePatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSinglePatientComponent]
    });
    fixture = TestBed.createComponent(ViewSinglePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
