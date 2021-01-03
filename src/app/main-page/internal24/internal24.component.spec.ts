import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal24Component } from './internal24.component';

describe('Internal24Component', () => {
  let component: Internal24Component;
  let fixture: ComponentFixture<Internal24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
