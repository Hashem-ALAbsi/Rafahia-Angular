import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedClintComponent } from './blocked-clint.component';

describe('BlockedClintComponent', () => {
  let component: BlockedClintComponent;
  let fixture: ComponentFixture<BlockedClintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockedClintComponent]
    });
    fixture = TestBed.createComponent(BlockedClintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
