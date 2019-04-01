import { Component } from '@angular/core';
// import { CourseService } from '../common/services/course.service';
import { CourseListService } from '../common/services/course-list.service';

@Component({
  selector: 'app-new-course-list',
  templateUrl: './new-course-list.component.html',
  styleUrls: ['./new-course-list.component.css']
})
export class NewCourseListComponent {
  courseTitle = 'Course List:';
  // serviceObj = new CourseService();
  courseList = [];
  constructor(private serviceObj: CourseListService) {
    this.courseList = this.serviceObj.getCourseList();
  }

  getTitle() {
    return this.courseTitle;
  }
  // getCourseList(){

  // }

}
