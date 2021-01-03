import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal15Component } from './internal15.component';

describe('Internal15Component', () => {
  let component: Internal15Component;
  let fixture: ComponentFixture<Internal15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
