import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintStatusTrackComponent } from './complaint-status-track.component';

describe('ComplaintStatusTrackComponent', () => {
  let component: ComplaintStatusTrackComponent;
  let fixture: ComponentFixture<ComplaintStatusTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintStatusTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintStatusTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
