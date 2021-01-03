import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal12Component } from './internal12.component';

describe('Internal12Component', () => {
  let component: Internal12Component;
  let fixture: ComponentFixture<Internal12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
