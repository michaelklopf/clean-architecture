// Redux gateway
import Course from '../entities/Course';
import CourseGateway from './CourseGateway';
import { addCourse } from '../actions/CourseActions';
import { State } from '../reducer';

class CourseRedux implements CourseGateway {
  store: State;

  constructor(store: State) {
    this.store = store;
  }

  getByCode(code: string): Course {
    let courses = this.store.getState().courses.courses;
    var foundCourses = courses.filter((course): boolean => { return course.code === code; });
    return foundCourses[0];
  }

  getAll(): Course[] {
    return this.store.getState().courses.courses;
  }

  addCourse(course: Course) {
    this.store.dispatch(addCourse(course));
  }
}

export default CourseRedux;
