import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerwalleteComponent } from './ownerwallete.component';

describe('OwnerwalleteComponent', () => {
  let component: OwnerwalleteComponent;
  let fixture: ComponentFixture<OwnerwalleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerwalleteComponent]
    });
    fixture = TestBed.createComponent(OwnerwalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
