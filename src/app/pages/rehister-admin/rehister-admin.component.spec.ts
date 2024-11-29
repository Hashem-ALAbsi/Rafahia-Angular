import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehisterAdminComponent } from './rehister-admin.component';

describe('RehisterAdminComponent', () => {
  let component: RehisterAdminComponent;
  let fixture: ComponentFixture<RehisterAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RehisterAdminComponent]
    });
    fixture = TestBed.createComponent(RehisterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
