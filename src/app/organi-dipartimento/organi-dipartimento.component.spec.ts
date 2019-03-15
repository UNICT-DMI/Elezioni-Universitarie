import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiDipartimentoComponent } from './organi-dipartimento.component';

describe('OrganiDipartimentoComponent', () => {
  let component: OrganiDipartimentoComponent;
  let fixture: ComponentFixture<OrganiDipartimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiDipartimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiDipartimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
