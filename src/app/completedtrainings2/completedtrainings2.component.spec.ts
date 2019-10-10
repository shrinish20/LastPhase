import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Completedtrainings2Component } from './completedtrainings2.component';

describe('Completedtrainings2Component', () => {
  let component: Completedtrainings2Component;
  let fixture: ComponentFixture<Completedtrainings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Completedtrainings2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Completedtrainings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
