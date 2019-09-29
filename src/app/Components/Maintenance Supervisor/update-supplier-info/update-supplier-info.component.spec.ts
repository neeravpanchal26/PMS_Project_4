import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupplierInfoComponent } from './update-supplier-info.component';

describe('UpdateSupplierInfoComponent', () => {
  let component: UpdateSupplierInfoComponent;
  let fixture: ComponentFixture<UpdateSupplierInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSupplierInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSupplierInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
