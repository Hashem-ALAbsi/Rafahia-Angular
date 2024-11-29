import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivewalleteComponent } from './activewallete.component';

describe('ActivewalleteComponent', () => {
  let component: ActivewalleteComponent;
  let fixture: ComponentFixture<ActivewalleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivewalleteComponent]
    });
    fixture = TestBed.createComponent(ActivewalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
