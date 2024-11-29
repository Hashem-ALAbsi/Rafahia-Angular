import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServicesbyIDComponent } from './show-servicesby-id.component';

describe('ShowServicesbyIDComponent', () => {
  let component: ShowServicesbyIDComponent;
  let fixture: ComponentFixture<ShowServicesbyIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowServicesbyIDComponent]
    });
    fixture = TestBed.createComponent(ShowServicesbyIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
