import Course from '../entities/Course';
import courses, { initialStateForCourse } from './CourseReducer';
import { DefaultCourseAction, AddCourseAction, toggleCheck } from '../actions/CourseActions';

it('returns initial state as default state', () => {
  // arrange
  const action: DefaultCourseAction = { type: 'UNKNOWN' };

  // act
  const returnState = courses(undefined, action);

  // assert
  expect(returnState).toBe(initialStateForCourse);
});

it('adds course to state', () => {
  // arrange
  const course = new Course(
    'BIOL-1507EL',
    'Biology II',
    new Date(new Date().setDate(new Date().getDate() - 3))
  );

  const action: AddCourseAction = {
    type: 'ADD_COURSE',
    course: course
  };

  // act
  const returnState = courses(initialStateForCourse, action);

  // assert
  expect(returnState).toEqual({
    courses: [
      course
    ],
    registeredCourses: []
  });
});

it('adds course to registered course if not already exists', () => {
  // arrange
  const action = toggleCheck('test-1');
  // act
  const returnState = courses(initialStateForCourse, action);
  // assert
  expect(returnState).toEqual({
    courses: [],
    registeredCourses: ['test-1']
  });
});

it('removes course from registered course if it already exists', () => {
  // arrange
  const action = toggleCheck('test-1');
  // act
  const returnState = courses(initialStateForCourse, action);
  const finalState = courses(returnState, action);
  // assert
  expect(finalState).toEqual({
    courses: [],
    registeredCourses: []
  });
});
