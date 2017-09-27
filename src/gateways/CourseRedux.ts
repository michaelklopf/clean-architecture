// Redux gateway
import { Dispatch } from 'redux';

import Course from '../entities/Course';
import CourseGateway from './CourseGateway';
import { addCourse } from '../actions/CourseActions';
import { State } from '../reducer';

class CourseRedux implements CourseGateway {
  getState: () => State;
  dispatch: Dispatch<{}>;

  constructor(getState: () => State, dispatch: Dispatch<{}>) {
    this.getState = getState;
    this.dispatch = dispatch;
  }

  getByCode(code: string): Course {
    let state = this.getState();
    var foundCourses = state.courses.courses.filter((course): boolean => { return course.code === code; });
    return foundCourses[0];
  }

  getAll(): Course[] {
    return this.getState().courses.courses;
  }

  addCourse(course: Course) {
    this.dispatch(addCourse(course));
  }
}

export default CourseRedux;
