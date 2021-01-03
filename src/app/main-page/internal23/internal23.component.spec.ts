import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal23Component } from './internal23.component';

describe('Internal23Component', () => {
  let component: Internal23Component;
  let fixture: ComponentFixture<Internal23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
