import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateservicewithidComponent } from './updateservicewithid.component';

describe('UpdateservicewithidComponent', () => {
  let component: UpdateservicewithidComponent;
  let fixture: ComponentFixture<UpdateservicewithidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateservicewithidComponent]
    });
    fixture = TestBed.createComponent(UpdateservicewithidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
