import Course from '../entities/Course';

import { CourseAction } from '../actions/CourseActions';

const initialStateForCourse = {
  courses: []
};

export default function courses(state = initialStateForCourse, action: CourseAction) {
  switch (action.type) {
    case 'ADD_COURSE':
      // TODO
      return Object.assign({}, state, {
        courses: state.courses.push(action.course)
      });
    default:
      return state;
  }
}
