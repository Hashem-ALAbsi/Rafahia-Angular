import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsNotshowComponent } from './reports-notshow.component';

describe('ReportsNotshowComponent', () => {
  let component: ReportsNotshowComponent;
  let fixture: ComponentFixture<ReportsNotshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsNotshowComponent]
    });
    fixture = TestBed.createComponent(ReportsNotshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
