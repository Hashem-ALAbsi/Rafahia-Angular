import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicescompanydeleteComponent } from './servicescompanydelete.component';

describe('ServicescompanydeleteComponent', () => {
  let component: ServicescompanydeleteComponent;
  let fixture: ComponentFixture<ServicescompanydeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicescompanydeleteComponent]
    });
    fixture = TestBed.createComponent(ServicescompanydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
