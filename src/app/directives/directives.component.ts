import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  courseList = [
    // {id: 1, name: 'Angular'},
    // {id: 2, name: 'HTML'},
    // {id: 3, name: 'CSS'},
    // {id: 4, name: 'JavaScript'},
    // {id: 5, name: 'NodeJS'},
    // {id: 6, name: 'Python'},
    // {id: 7, name: '.Net'}
  ];

  usersDetails = {
    user: {
      fName : 'Dinesh',
      lName : 'Chand'
    }
  };
  showTab = 'course';
  constructor() { }

  ngOnInit() {
  }

  // addCourse() {
  //   this.courseList.push({
  //       id: 8,
  //       name: 'Course x'
  //     });
  // }
  addCourse(course: HTMLInputElement) {
    // this.courseList.push({
    //     id: 8,
    //     name: course.value
    //   });
    this.courseList.splice(0, 0, {
        id: 8,
        name: course.value
      });
    course.value = '';
  }

  removeElement(course) {
    const indexVal = this.courseList.indexOf(course);
    this.courseList.splice(indexVal, 1 );
  }

}
