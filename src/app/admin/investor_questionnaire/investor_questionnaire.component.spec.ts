import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorQuestionnaireComponent } from './investor_questionnaire.component';

describe('ViewcampaignComponent', () => {
  let component: InvestorQuestionnaireComponent;
  let fixture: ComponentFixture<InvestorQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
