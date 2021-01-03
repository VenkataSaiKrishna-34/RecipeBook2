import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal25Component } from './internal25.component';

describe('Internal25Component', () => {
  let component: Internal25Component;
  let fixture: ComponentFixture<Internal25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
