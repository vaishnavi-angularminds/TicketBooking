import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsInformationComponent } from './seats-information.component';

describe('SeatsInformationComponent', () => {
  let component: SeatsInformationComponent;
  let fixture: ComponentFixture<SeatsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
