// Interface adapter or gateway

import Student from '../entities/Student';

interface StudentRepository {
  getById(id: number): Student;
  save(student: Student): void;
}

class StudentRepository implements StudentRepository {
  students: Student[];

  constructor() {
    this.students = [];
  }

  getById(id: number): Student {
    var foundStudents = this.students.filter((student): boolean => { return student.id === id; });
    return foundStudents[0];
  }

  save(student: Student): void {
    this.students.push(student);
  }
}

export default StudentRepository;
