import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal13Component } from './internal13.component';

describe('Internal13Component', () => {
  let component: Internal13Component;
  let fixture: ComponentFixture<Internal13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
