/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaceSnapListComponent } from './face-snap-list.component';

describe('FaceSnapListComponent', () => {
  let component: FaceSnapListComponent;
  let fixture: ComponentFixture<FaceSnapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceSnapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSnapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
