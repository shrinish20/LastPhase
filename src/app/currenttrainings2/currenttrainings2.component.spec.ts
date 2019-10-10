import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Currenttrainings2Component } from './currenttrainings2.component';

describe('Currenttrainings2Component', () => {
  let component: Currenttrainings2Component;
  let fixture: ComponentFixture<Currenttrainings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Currenttrainings2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Currenttrainings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
