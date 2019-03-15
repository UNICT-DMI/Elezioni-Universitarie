import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiateneoComponent } from './organiateneo.component';

describe('OrganiateneoComponent', () => {
  let component: OrganiateneoComponent;
  let fixture: ComponentFixture<OrganiateneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiateneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiateneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
