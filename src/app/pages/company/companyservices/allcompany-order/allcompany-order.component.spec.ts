import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcompanyOrderComponent } from './allcompany-order.component';

describe('AllcompanyOrderComponent', () => {
  let component: AllcompanyOrderComponent;
  let fixture: ComponentFixture<AllcompanyOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcompanyOrderComponent]
    });
    fixture = TestBed.createComponent(AllcompanyOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
