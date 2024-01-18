import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaDialogComponent } from './quota-dialog.component';

describe('TrainingDialogComponent', () => {
  let component: QuotaDialogComponent;
  let fixture: ComponentFixture<QuotaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotaDialogComponent]
    });
    fixture = TestBed.createComponent(QuotaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
