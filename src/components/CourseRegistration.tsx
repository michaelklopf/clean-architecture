import React, { Component } from 'react';
import { connect } from 'react-redux';

import CourseListItem from './CourseListItem';
import { State } from '../reducer';
import Course from '../entities/Course';

import { RequestHandler } from '../usecases/RequestCourseRegistrationInteractor';
import CourseRegistrationRequestMessage from '../messages/CourseRegistrationRequestMessage';

interface CourseRegistrationProps {
  courses: Course[];
  useCase: RequestHandler;
}

class CourseRegistration extends Component<CourseRegistrationProps> {

  constructor(props: CourseRegistrationProps) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    // todo collect form data here
    let request = new CourseRegistrationRequestMessage(1, ['test-1']);
    this.props.useCase.handle(request);
  }

  render() {
    return (
      <div>
        <form>
          <h3>Enter your student identification:</h3> 
          <label htmlFor="studentId">Student id</label>
          <input
            id="studentId"
            type="text"
            placeholder="Enter student id..."
          />
          <h3>Choose your courses:</h3> 
          <ul>
            {this.props.courses.map(function(course: Course){
              return <CourseListItem courseName={course.name} key={course.code}/>;
            })}
          </ul>
        </form>
        <button type="button" onClick={this.register}>Register</button>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    courses: state.courses.courses
  };
};

export default connect(mapStateToProps)(CourseRegistration);
