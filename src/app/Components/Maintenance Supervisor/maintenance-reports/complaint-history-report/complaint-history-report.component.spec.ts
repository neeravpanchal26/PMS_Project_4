import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintHistoryReportComponent } from './complaint-history-report.component';

describe('ComplaintHistoryReportComponent', () => {
  let component: ComplaintHistoryReportComponent;
  let fixture: ComponentFixture<ComplaintHistoryReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintHistoryReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintHistoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
