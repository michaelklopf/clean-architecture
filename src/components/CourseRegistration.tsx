import React, { Component } from 'react';
import { connect } from 'react-redux';

import CourseListItem from './CourseListItem';
import { State } from '../reducer';
import Course from '../entities/Course';
import { toggleCheck } from '../actions/CourseActions';

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

  register(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    // todo collect form data here
    let request = new CourseRegistrationRequestMessage(1, ['test-1']);
    console.log(this.props.useCase.handle(request));
  }

  render() {
    return (
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
            return <CourseListItem
                courseName={course.name}
                key={course.code}
                courseCode={course.code}
                toggleCheck={toggleCheck} />;
          })}
        </ul>
        <input type="submit" onClick={this.register} value="Register" />
      </form>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    courses: state.courses.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: (course: Course) => {
      dispatch(toggleCheck(course));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseRegistration);
