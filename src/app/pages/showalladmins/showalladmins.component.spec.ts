import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowalladminsComponent } from './showalladmins.component';

describe('ShowalladminsComponent', () => {
  let component: ShowalladminsComponent;
  let fixture: ComponentFixture<ShowalladminsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowalladminsComponent]
    });
    fixture = TestBed.createComponent(ShowalladminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
