import StudentRepository from './StudentRepository';
import Student from '../entities/Student';

it('can find student in repository', () => {
  // arrange
  var studentRepository = new StudentRepository();
  studentRepository.save(new Student(1));
  studentRepository.save(new Student(2));

  // act
  var student = studentRepository.getById(2);

  // assert
  expect(student.id).toBe(2);
});