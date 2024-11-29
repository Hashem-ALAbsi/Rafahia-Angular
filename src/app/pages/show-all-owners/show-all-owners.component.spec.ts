import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllOwnersComponent } from './show-all-owners.component';

describe('ShowAllOwnersComponent', () => {
  let component: ShowAllOwnersComponent;
  let fixture: ComponentFixture<ShowAllOwnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllOwnersComponent]
    });
    fixture = TestBed.createComponent(ShowAllOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
