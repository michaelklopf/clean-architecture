import Student from '../entities/Student';

interface IStudentRepository {
  getById(id: number): Student;
  save(student: Student): void;
}

class StudentRepository implements IStudentRepository {
  getById(id: number): Student {
    return new Student();
  }

  save(student:Student): void {
    // needs to be implemented
  }
}

export default StudentRepository;
