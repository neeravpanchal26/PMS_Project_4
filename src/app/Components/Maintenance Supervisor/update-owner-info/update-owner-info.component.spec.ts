import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOwnerInfoComponent } from './update-owner-info.component';

describe('UpdateOwnerInfoComponent', () => {
  let component: UpdateOwnerInfoComponent;
  let fixture: ComponentFixture<UpdateOwnerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOwnerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOwnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
