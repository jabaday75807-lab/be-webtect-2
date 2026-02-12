import { Routes } from '@angular/router';
import { Activity1Component } from './activity-1/Activity1Component';
import { PrelimExamComponent } from './prelim-exam/prelim-exam.component';
import { StudentsComponent } from './students.component';
import { CreateStudentComponent } from './create-student.component';

export const routes: Routes = [
  {
    path: 'activity-1',
    component: Activity1Component
  },
  {
    path: 'prelimExamComponent',
    component: PrelimExamComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'create-student',

    component: CreateStudentComponent
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  }
];
