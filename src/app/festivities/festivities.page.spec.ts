import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivitiesPage } from './festivities.page';

describe('FestivitiesPage', () => {
  let component: FestivitiesPage;
  let fixture: ComponentFixture<FestivitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
