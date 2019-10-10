import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorpaymentsComponent } from './mentorpayments.component';

describe('MentorpaymentsComponent', () => {
  let component: MentorpaymentsComponent;
  let fixture: ComponentFixture<MentorpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
