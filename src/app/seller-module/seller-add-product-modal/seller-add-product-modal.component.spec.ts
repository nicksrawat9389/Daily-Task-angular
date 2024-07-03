import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddProductModalComponent } from './seller-add-product-modal.component';

describe('SellerAddProductModalComponent', () => {
  let component: SellerAddProductModalComponent;
  let fixture: ComponentFixture<SellerAddProductModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerAddProductModalComponent]
    });
    fixture = TestBed.createComponent(SellerAddProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
