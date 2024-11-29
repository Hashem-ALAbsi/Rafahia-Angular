import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferbycompanyComponent } from './transferbycompany.component';

describe('TransferbycompanyComponent', () => {
  let component: TransferbycompanyComponent;
  let fixture: ComponentFixture<TransferbycompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferbycompanyComponent]
    });
    fixture = TestBed.createComponent(TransferbycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
