import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./screen/login/login.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {DashboardComponent} from "./screen/admin/dashboard/dashboard.component";
import {SubjectComponent} from "./screen/admin/subject/subject.component";

import {ListSubjectComponent} from "./screen/admin/list-subject/list-subject.component";
import {FormSubjectComponent} from "./screen/admin/form-subject/form-subject.component";
import {StudentComponent} from "./screen/admin/student/student.component";
import {ListStudentComponent} from "./screen/admin/list-student/list-student.component";
import {FormStudentComponent} from "./screen/admin/form-student/form-student.component";
import {QuestionComponent} from "./screen/admin/question/question.component";
import {ListQuestionComponent} from "./screen/admin/list-question/list-question.component";
import {FormQuestionComponent} from "./screen/admin/form-question/form-question.component";
import {ClientLayoutComponent} from "./layouts/client-layout/client-layout.component";
import {HomeComponent} from "./screen/client/home/home.component";
import {QuizComponent} from "./screen/client/quiz/quiz.component";
import {FinalQuizComponent} from "./screen/client/final-quiz/final-quiz.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "mon-hoc",
        component: SubjectComponent,
        children: [
          {
            path: "",
            component: ListSubjectComponent
          },
          {
            path: "add",
            component: FormSubjectComponent
          },
          {
            path: "edit/:id",
            component: FormSubjectComponent
          }
        ]
      },
      {
        path: "sinh-vien",
        component: StudentComponent,
        children: [
          {
            path: "",
            component: ListStudentComponent
          },
          {
            path: "add",
            component: FormStudentComponent
          },
          {
            path: "edit/:id",
            component: FormStudentComponent
          }
        ]
      },
      {
        path: "cau-hoi",
        component: QuestionComponent,
        children:[
          {
            path: ":id",
            component: ListQuestionComponent
          },
          {
            path: ":id/add",
            component: FormQuestionComponent
          }
        ]
      }
    ]
  },
  {
    path: "",
    component: ClientLayoutComponent,
    children:[
      {
        path: "",
        component:HomeComponent
      },
      {
        path: "mon-hoc",
        component: HomeComponent
      },
      {
        path: "quiz/:id",
        component: QuizComponent
      },
      {
        path: "quiz/:id/ket-qua",
        component: FinalQuizComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
