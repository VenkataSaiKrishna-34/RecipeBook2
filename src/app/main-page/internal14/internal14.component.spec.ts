import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal14Component } from './internal14.component';

describe('Internal14Component', () => {
  let component: Internal14Component;
  let fixture: ComponentFixture<Internal14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
