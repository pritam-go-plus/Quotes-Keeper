import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuoteComponent } from './add-quote.component';

describe('AddQuoteComponent', () => {
  let component: AddQuoteComponent;
  let fixture: ComponentFixture<AddQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddQuoteComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
