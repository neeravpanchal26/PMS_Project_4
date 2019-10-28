import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceReportsComponent } from './maintenance-reports.component';

describe('MaintenanceReportsComponent', () => {
  let component: MaintenanceReportsComponent;
  let fixture: ComponentFixture<MaintenanceReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
