import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetorderbyidComponent } from './getorderbyid.component';

describe('GetorderbyidComponent', () => {
  let component: GetorderbyidComponent;
  let fixture: ComponentFixture<GetorderbyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetorderbyidComponent]
    });
    fixture = TestBed.createComponent(GetorderbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
