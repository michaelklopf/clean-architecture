import { combineReducers } from 'redux';

import courses from './reducers/CourseReducer';
import students from './reducers/StudentReducer';

const rootReducer = combineReducers({
  courses,
  students
});

export default rootReducer;
