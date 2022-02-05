import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteeDetailComponent } from './quotee-detail.component';

describe('QuoteeDetailComponent', () => {
  let component: QuoteeDetailComponent;
  let fixture: ComponentFixture<QuoteeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
