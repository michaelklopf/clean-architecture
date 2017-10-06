import Student from '../entities/Student';

export default interface StudentGateway {
  getById(id: number): Student,
  save(student: Student): void
}
