import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkmodalComponent } from './bookmarkmodal.component';

describe('BookmarkmodalComponent', () => {
  let component: BookmarkmodalComponent;
  let fixture: ComponentFixture<BookmarkmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
