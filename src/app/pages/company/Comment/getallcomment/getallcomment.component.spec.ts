import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcommentComponent } from './getallcomment.component';

describe('GetallcommentComponent', () => {
  let component: GetallcommentComponent;
  let fixture: ComponentFixture<GetallcommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallcommentComponent]
    });
    fixture = TestBed.createComponent(GetallcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
