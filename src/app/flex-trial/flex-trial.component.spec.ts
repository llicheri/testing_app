import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexTrialComponent } from './flex-trial.component';

describe('FlexTrialComponent', () => {
  let component: FlexTrialComponent;
  let fixture: ComponentFixture<FlexTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
