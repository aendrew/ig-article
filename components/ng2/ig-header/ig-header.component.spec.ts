/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IgHeaderComponent } from './ig-header.component';

describe('Component: IgHeader', () => {
  it('should create an instance', () => {
    let component = new IgHeaderComponent();
    expect(component).toBeTruthy();
  });
});
