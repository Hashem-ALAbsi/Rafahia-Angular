import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintActiveComponent } from './clint-active.component';

describe('ClintActiveComponent', () => {
  let component: ClintActiveComponent;
  let fixture: ComponentFixture<ClintActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClintActiveComponent]
    });
    fixture = TestBed.createComponent(ClintActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
