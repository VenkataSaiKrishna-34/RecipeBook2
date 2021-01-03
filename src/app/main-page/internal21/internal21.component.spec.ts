import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal21Component } from './internal21.component';

describe('Internal21Component', () => {
  let component: Internal21Component;
  let fixture: ComponentFixture<Internal21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
