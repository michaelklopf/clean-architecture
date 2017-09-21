import * as React from 'react';
import './App.css';
import RequestCourseRegistrationInteractor from './usecases/RequestCourseRegistrationInteractor';

import AuthService from './gateways/AuthService';
import CourseRepository from './gateways/CourseRepository';
import StudentRepository from './gateways/StudentRepository';

import Course from './entities/Course';
import Student from './entities/Student';
import CourseRegistrationRequestMessage from './messages/CourseRegistrationRequestMessage';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    var authService = new AuthService();
    var studentRepository = new StudentRepository();
    var courseRepository = new CourseRepository();

    courseRepository.addCourse(new Course('test-1', 'Programming with clean architecture'));
    courseRepository.addCourse(new Course('test-2', 'Debugging all the code'));
    studentRepository.save(new Student(1));
  
    var courseRegistrationRequestUseCase = new RequestCourseRegistrationInteractor(
      authService,
      courseRepository,
      studentRepository
    );
  
    var useCaseRequestMessage = new CourseRegistrationRequestMessage(1, ['test-1']);

    var responseMessage = courseRegistrationRequestUseCase.handle(useCaseRequestMessage);

    console.log(responseMessage);

    var useCaseRequestMessage2 = new CourseRegistrationRequestMessage(1, ['test-2']);

    var secondResponse = courseRegistrationRequestUseCase.handle(useCaseRequestMessage2);

    console.log(secondResponse);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Look in the console for output
        </p>
      </div>
    );
  }
}

export default App;
