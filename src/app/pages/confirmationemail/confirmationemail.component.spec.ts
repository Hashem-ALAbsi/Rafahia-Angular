import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationemailComponent } from './confirmationemail.component';

describe('ConfirmationemailComponent', () => {
  let component: ConfirmationemailComponent;
  let fixture: ComponentFixture<ConfirmationemailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationemailComponent]
    });
    fixture = TestBed.createComponent(ConfirmationemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
