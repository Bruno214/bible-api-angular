import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradInputComponent } from './brad-input.component';

describe('BradInputComponent', () => {
  let component: BradInputComponent;
  let fixture: ComponentFixture<BradInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BradInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BradInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
