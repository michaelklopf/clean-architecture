import { createStore } from 'redux';
import rootReducer from '../reducer';

import Course from '../entities/Course';
import CourseRedux from './CourseRedux';

it('can find the right course', () => {
  // arrange
  let store = createStore(rootReducer);
  var courseGateway = new CourseRedux(store.getState, store.dispatch);
  courseGateway.addCourse(new Course('test1', 'Inception'));
  courseGateway.addCourse(new Course('test2', 'The Dark Knight'));

  // act
  var course = courseGateway.getByCode('test2');

  // assert
  expect(course.code).toBe('test2');
});
