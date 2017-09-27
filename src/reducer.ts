import { combineReducers } from 'redux';

import courses, { CourseState } from './reducers/CourseReducer';
import students, { StudentState } from './reducers/StudentReducer';

export type State = {
  courses: CourseState,
  students: StudentState
};

const rootReducer = combineReducers<State>({
  courses,
  students
});

export default rootReducer;
