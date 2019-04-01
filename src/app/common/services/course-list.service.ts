import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  constructor() { }
  getCourseList() {
    return  [
        'Angular',
        'HTML',
        'CSS',
        'Javascript',
        'Node',
        'PHP',
        'Java',
        'Python'
      ];
  }
}
