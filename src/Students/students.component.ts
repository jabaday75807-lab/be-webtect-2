import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GetStudent } from '../models/students.model';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  private readonly studentsService = inject(StudentsService);
  
  students: GetStudent[] = [];

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.getStudents();
  }

  async getStudents(): Promise<void> {
    try {
      this.students = await this.studentsService.getStudents();
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }

  goToCreateStudent() {
    this.router.navigate(['/create-student']);
  }

  async deleteStudent(studentId: string): Promise<void> {
    try {
      await this.studentsService.deleteStudent(studentId);
      this.students = this.students.filter(student => student.id !== studentId);
    } catch (error) {
      console.error(error);
    }
  }
}


