import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintWalletComponent } from './clint-wallet.component';

describe('ClintWalletComponent', () => {
  let component: ClintWalletComponent;
  let fixture: ComponentFixture<ClintWalletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClintWalletComponent]
    });
    fixture = TestBed.createComponent(ClintWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
