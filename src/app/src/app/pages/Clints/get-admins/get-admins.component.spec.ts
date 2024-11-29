import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdminsComponent } from './get-admins.component';

describe('GetAdminsComponent', () => {
  let component: GetAdminsComponent;
  let fixture: ComponentFixture<GetAdminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAdminsComponent]
    });
    fixture = TestBed.createComponent(GetAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});