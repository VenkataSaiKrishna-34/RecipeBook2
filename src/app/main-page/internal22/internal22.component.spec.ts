import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Internal22Component } from './internal22.component';

describe('Internal22Component', () => {
  let component: Internal22Component;
  let fixture: ComponentFixture<Internal22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Internal22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Internal22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
