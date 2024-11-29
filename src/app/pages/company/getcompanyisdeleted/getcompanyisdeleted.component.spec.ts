import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcompanyisdeletedComponent } from './getcompanyisdeleted.component';

describe('GetcompanyisdeletedComponent', () => {
  let component: GetcompanyisdeletedComponent;
  let fixture: ComponentFixture<GetcompanyisdeletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetcompanyisdeletedComponent]
    });
    fixture = TestBed.createComponent(GetcompanyisdeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
