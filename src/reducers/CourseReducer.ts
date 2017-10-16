import Course from '../entities/Course';

import { CourseAction } from '../actions/CourseActions';

export type CourseState = {
  courses: Course[]
};

export const initialStateForCourse: CourseState = {
  courses: []
};

export default function courses(state: CourseState = initialStateForCourse, action: CourseAction) {
  switch (action.type) {
    case 'ADD_COURSE':
      return Object.assign({}, state, {
        courses: state.courses.concat(action.course)
      });
    case 'TOGGLE_COURSE':
      return Object.assign({}, state, {
        // TODO toggle the right course, add extended structure to courses array
        courses: state.courses
      });
    default:
      return state;
  }
}
