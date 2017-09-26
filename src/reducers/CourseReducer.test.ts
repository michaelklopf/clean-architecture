import Course from '../entities/Course';
import courses, { initialStateForCourse } from './CourseReducer';
import { DefaultCourseAction, AddCourseAction } from '../actions/CourseActions';

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
    ]
  });
});
