import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorlandingpageComponent } from './mentorlandingpage.component';

describe('MentorlandingpageComponent', () => {
  let component: MentorlandingpageComponent;
  let fixture: ComponentFixture<MentorlandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorlandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorlandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
