import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaDashbaordComponent } from './quota-dashbaord.component';

describe('QuotaDashbaordComponent', () => {
  let component: QuotaDashbaordComponent;
  let fixture: ComponentFixture<QuotaDashbaordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotaDashbaordComponent]
    });
    fixture = TestBed.createComponent(QuotaDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
