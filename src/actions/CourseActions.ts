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

export interface ToggleCheckAction {
  type: 'TOGGLE_COURSE';
  courseCode: string;
}

export function toggleCheck(courseCode: string): ToggleCheckAction {
  return {
    type: 'TOGGLE_COURSE',
    courseCode: courseCode
  };
}

export interface DefaultCourseAction {
  type: 'UNKNOWN';
}

export type CourseAction = AddCourseAction | ToggleCheckAction | DefaultCourseAction;
