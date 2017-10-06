import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

import CourseRegistration from './components/CourseRegistration';
import RequestCourseRegistrationInteractor from './usecases/RequestCourseRegistrationInteractor';
import AuthService from './gateways/AuthService';
import CourseRedux from './gateways/CourseRedux';
import StudentRedux from './gateways/StudentRedux';
import Student from './entities/Student';
import Course from './entities/Course';

let store = createStore(rootReducer);

let authService = new AuthService();
let studentReduxGateway = new StudentRedux(store.getState, store.dispatch);
let courseReduxGateway = new CourseRedux(store.getState, store.dispatch);
let useCase = new RequestCourseRegistrationInteractor(authService, courseReduxGateway, studentReduxGateway);

courseReduxGateway.addCourse(new Course('test-1', 'Programming with clean architecture', new Date(2017, 11, 12)));
courseReduxGateway.addCourse(new Course('test-2', 'Debugging all the code', new Date(2017, 12, 6)));
studentReduxGateway.save(new Student(1));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CourseRegistration useCase={useCase} />
      </Provider>
    );
  }
}

export default App;
