import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardItTechnicianComponent } from './dashboard-it-technician.component';

describe('DashboardItTechnicianComponent', () => {
  let component: DashboardItTechnicianComponent;
  let fixture: ComponentFixture<DashboardItTechnicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardItTechnicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardItTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
