import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComplaintComponent } from './report-complaint.component';

describe('ReportComplaintComponent', () => {
  let component: ReportComplaintComponent;
  let fixture: ComponentFixture<ReportComplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportComplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
