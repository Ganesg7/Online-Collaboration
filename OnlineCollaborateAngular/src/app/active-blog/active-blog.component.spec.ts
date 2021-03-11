import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBlogComponent } from './active-blog.component';

describe('ActiveBlogComponent', () => {
  let component: ActiveBlogComponent;
  let fixture: ComponentFixture<ActiveBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
