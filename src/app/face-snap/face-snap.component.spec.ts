/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaceSnapComponent } from './face-snap.component';

describe('FaceSnapComponent', () => {
  let component: FaceSnapComponent;
  let fixture: ComponentFixture<FaceSnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceSnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
