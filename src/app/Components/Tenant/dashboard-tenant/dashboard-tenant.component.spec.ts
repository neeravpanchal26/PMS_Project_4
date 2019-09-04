import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTenantComponent } from './dashboard-tenant.component';

describe('DashboardTenantComponent', () => {
  let component: DashboardTenantComponent;
  let fixture: ComponentFixture<DashboardTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
