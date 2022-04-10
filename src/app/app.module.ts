import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './screen/login/login.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {DashboardComponent} from "./screen/admin/dashboard/dashboard.component";
import { SubjectComponent } from './screen/admin/subject/subject.component';
import {HttpClientModule} from "@angular/common/http";
import { ListSubjectComponent } from './screen/admin/list-subject/list-subject.component';
import { FormSubjectComponent } from './screen/admin/form-subject/form-subject.component';
import { StudentComponent } from './screen/admin/student/student.component';
import { ListStudentComponent } from './screen/admin/list-student/list-student.component';
import { GenderPipe } from './helpers/pipes/gender.pipe';
import { FormStudentComponent } from './screen/admin/form-student/form-student.component';
import { QuestionComponent } from './screen/admin/question/question.component';
import { ListQuestionComponent } from './screen/admin/list-question/list-question.component';
import { FormQuestionComponent } from './screen/admin/form-question/form-question.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomeComponent } from './screen/client/home/home.component';
import { QuizComponent } from './screen/client/quiz/quiz.component';
import { FinalQuizComponent } from './screen/client/final-quiz/final-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    DashboardComponent,
    SubjectComponent,
    ListSubjectComponent,
    FormSubjectComponent,
    StudentComponent,
    ListStudentComponent,
    GenderPipe,
    FormStudentComponent,
    QuestionComponent,
    ListQuestionComponent,
    FormQuestionComponent,
    ClientLayoutComponent,
    HomeComponent,
    QuizComponent,
    FinalQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
