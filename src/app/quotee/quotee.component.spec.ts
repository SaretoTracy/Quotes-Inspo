import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteeComponent } from './quotee.component';

describe('QuoteeComponent', () => {
  let component: QuoteeComponent;
  let fixture: ComponentFixture<QuoteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
