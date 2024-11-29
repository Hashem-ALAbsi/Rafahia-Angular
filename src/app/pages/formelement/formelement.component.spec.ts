import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormelementComponent } from './formelement.component';

describe('FormelementComponent', () => {
  let component: FormelementComponent;
  let fixture: ComponentFixture<FormelementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormelementComponent]
    });
    fixture = TestBed.createComponent(FormelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
