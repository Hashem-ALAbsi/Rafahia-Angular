import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockwalleteComponent } from './blockwallete.component';

describe('BlockwalleteComponent', () => {
  let component: BlockwalleteComponent;
  let fixture: ComponentFixture<BlockwalleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockwalleteComponent]
    });
    fixture = TestBed.createComponent(BlockwalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
