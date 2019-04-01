import { Component } from '@angular/core';

@Component({
    selector : 'app-course',
    // template : '<div><h1>Course</h1><p>THis is all about courses</p></div>'
    // template : '<div>\
    //                 <h1>Course</h1>\
    //                 <p>THis is all about courses</p>\
    //             </div>'
//     template : '<div>' +
//                     '<h1>Course</h1>' +
//                     '<p>THis is all about courses</p>' +
//                 '</div>'
        template : `<div>
                        <h1>Course</h1>
                        <p>THis is all about courses.</p>
                        <app-new-course-list></app-new-course-list>
                        <p>Course Component End</p>
                    </div>`

})
export class CourseComponent {

}
