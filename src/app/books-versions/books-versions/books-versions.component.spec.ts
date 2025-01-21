import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksVersionsComponent } from './books-versions.component';

describe('BooksVersionsComponent', () => {
  let component: BooksVersionsComponent;
  let fixture: ComponentFixture<BooksVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksVersionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
