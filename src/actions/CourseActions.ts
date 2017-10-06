// actions for courses
// Discriminated Unions
// https://basarat.gitbooks.io/typescript/docs/types/discriminated-unions.html
import Course from '../entities/Course';

export interface AddCourseAction {
  type: 'ADD_COURSE';
  course: Course;
}

export function addCourse(course: Course): AddCourseAction {
  return {
    type: 'ADD_COURSE',
    course: course
  };
}

export interface DefaultCourseAction {
  type: 'UNKNOWN';
}

export type CourseAction = AddCourseAction | DefaultCourseAction;
