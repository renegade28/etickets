import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSignupComponent } from './new-signup.component';

describe('NewSignupComponent', () => {
  let component: NewSignupComponent;
  let fixture: ComponentFixture<NewSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
