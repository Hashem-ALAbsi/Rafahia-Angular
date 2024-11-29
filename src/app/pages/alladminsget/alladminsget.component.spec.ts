import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladminsgetComponent } from './alladminsget.component';

describe('AlladminsgetComponent', () => {
  let component: AlladminsgetComponent;
  let fixture: ComponentFixture<AlladminsgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlladminsgetComponent]
    });
    fixture = TestBed.createComponent(AlladminsgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
