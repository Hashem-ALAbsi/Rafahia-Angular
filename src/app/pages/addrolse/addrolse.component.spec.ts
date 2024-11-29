import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrolseComponent } from './addrolse.component';

describe('AddrolseComponent', () => {
  let component: AddrolseComponent;
  let fixture: ComponentFixture<AddrolseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddrolseComponent]
    });
    fixture = TestBed.createComponent(AddrolseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
