import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';

import CourseRegistration from './components/CourseRegistration';
import RequestCourseRegistrationInteractor, { RequestHandler } from './usecases/RequestCourseRegistrationInteractor';
import AuthService from './gateways/AuthService';
import CourseRedux from './gateways/CourseRedux';
import StudentRedux from './gateways/StudentRedux';
import Student from './entities/Student';
import Course from './entities/Course';

let store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

class App extends Component<any, any> {
  authService: AuthService;
  studentReduxGateway: StudentRedux;
  courseReduxGateway: CourseRedux;
  useCase: RequestHandler;
  
  constructor(props: any) {
    super(props);

    this.authService = new AuthService();
    this.studentReduxGateway = new StudentRedux(store.getState, store.dispatch);
    this.courseReduxGateway = new CourseRedux(store.getState, store.dispatch);
    this.useCase = new RequestCourseRegistrationInteractor(
        this.authService,
        this.courseReduxGateway,
        this.studentReduxGateway
    );
  }

  render() {
    this.courseReduxGateway.addCourse(
      new Course(
        'test-1',
        'Programming with clean architecture',
        new Date(2017, 11, 12)
      )
    );
    this.courseReduxGateway.addCourse(
      new Course(
        'test-2',
        'Debugging all the code',
        new Date(2017, 12, 6)
      )
    );
    this.studentReduxGateway.save(new Student(1));

    return (
      <Provider store={store}>
        <CourseRegistration
          useCase={this.useCase}
        />
      </Provider>
    );
  }
}

export default App;
