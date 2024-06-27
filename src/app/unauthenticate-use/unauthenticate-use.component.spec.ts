import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthenticateUseComponent } from './unauthenticate-use.component';

describe('UnauthenticateUseComponent', () => {
  let component: UnauthenticateUseComponent;
  let fixture: ComponentFixture<UnauthenticateUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnauthenticateUseComponent]
    });
    fixture = TestBed.createComponent(UnauthenticateUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
