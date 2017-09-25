// actions for courses
// Discriminated Unions
// https://basarat.gitbooks.io/typescript/docs/types/discriminated-unions.html
// https://hackernoon.com/tagged-unions-react-and-redux-55e262e4d0ea
import Course from '../entities/Course';

interface AddCourseAction {
  type: 'ADD_COURSE',
  course: Course
}

export type CourseAction = AddCourseAction;
