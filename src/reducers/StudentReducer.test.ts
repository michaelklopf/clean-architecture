import Student from '../entities/Student';
import students, { initialStateForStudent } from './StudentReducer';
import { DefaultStudentAction, SaveStudentAction } from '../actions/StudentActions';

it('returns initial state as default state', () => {
  // arrange
  const action: DefaultStudentAction = { type: 'UNKNOWN' };

  // act
  const returnState = students(undefined, action);

  // assert
  expect(returnState).toBe(initialStateForStudent);
});

it('adds student to state', () => {
  // arrange
  const student = new Student(1);

  const action: SaveStudentAction = {
    type: 'SAVE_STUDENT',
    student: student
  };

  // act
  const returnState = students(initialStateForStudent, action);

  // assert
  expect(returnState).toEqual({
    students: [
      student
    ]
  });
});
