import Course from '../entities/Course';

import { CourseAction } from '../actions/CourseActions';

export type CourseState = {
  courses: Course[],
  registeredCourses: string[]
};

export const initialStateForCourse: CourseState = {
  courses: [],
  registeredCourses: []
};

export default function courses(
    state: CourseState = initialStateForCourse,
    action: CourseAction) {
  switch (action.type) {
    case 'ADD_COURSE':
      return Object.assign({}, state, {
        courses: state.courses.concat(action.course)
      });
    case 'TOGGLE_COURSE':
      let index = state.registeredCourses.findIndex(
        function(courseCode) { return action.courseCode === courseCode; }
      );
      if (index > -1) {
        return Object.assign({}, state, {
          registeredCourses: state.registeredCourses.filter((courseCode) => {
            return courseCode !== action.courseCode;
          })
        });
      } else {
        return Object.assign({}, state, {
          registeredCourses: state.registeredCourses.concat(action.courseCode)
        });
      }
    default:
      return state;
  }
}
