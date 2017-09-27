import { combineReducers } from 'redux';

import courses, { CourseState } from './reducers/CourseReducer';
import students, { StudentState } from './reducers/StudentReducer';

export type State = CourseState | StudentState;

const rootReducer = combineReducers({
  courses,
  students
});

export default rootReducer;
