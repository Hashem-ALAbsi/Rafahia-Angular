import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltranferComponent } from './alltranfer.component';

describe('AlltranferComponent', () => {
  let component: AlltranferComponent;
  let fixture: ComponentFixture<AlltranferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltranferComponent]
    });
    fixture = TestBed.createComponent(AlltranferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
