import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseListComponent } from './new-course-list.component';

describe('NewCourseListComponent', () => {
  let component: NewCourseListComponent;
  let fixture: ComponentFixture<NewCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
