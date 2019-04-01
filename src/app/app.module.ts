import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { NewCourseListComponent } from './new-course-list/new-course-list.component';
import { CourseService } from './common/services/course.service';
import { DataAndEventComponent } from './data-and-event/data-and-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { SummaryPipe } from './common/pipes/summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { SampleComponent } from './sample/sample.component';
import { PanelComponent } from './panel/panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TopicsComponent } from './topics/topics.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './common/default/app-error-handler';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';

@NgModule({ // module decorator
  declarations: [
    AppComponent,
    CourseComponent,
    NewCourseListComponent,
    DataAndEventComponent,
    PipesComponent,
    SummaryPipe,
    FavouriteComponent,
    SampleComponent,
    PanelComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignInComponent,
    TopicsComponent,
    FormBuilderComponent,
    PostComponent,
    CommentsListComponent,
    RxjsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
