import { createStore } from 'redux';
import rootReducer from '../reducer';

import Student from '../entities/Student';
import StudentRedux from './StudentRedux';

it('can find the right student', () => {
  let store = createStore(rootReducer);
  var studentGateway = new StudentRedux(store.getState, store.dispatch);
  studentGateway.save(new Student(1));
  studentGateway.save(new Student(2));

  var student = studentGateway.getById(2);

  console.log('The student is', student);

  expect(student.id).toBe(2);
});
