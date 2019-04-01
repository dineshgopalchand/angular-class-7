import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
    getCourseList() {
        return  [
            'Angular',
            'HTML',
            'CSS',
            'Javascript',
            'Node',
            'PHP',
            'Java'
          ];
    }
}
