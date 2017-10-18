import React, { Component } from 'react';
import { connect } from 'react-redux';

import CourseListItem from './CourseListItem';
import { State } from '../reducer';
import Course from '../entities/Course';
import { toggleCheck } from '../actions/CourseActions';

import { RequestHandler } from '../usecases/RequestCourseRegistrationInteractor';
import CourseRegistrationRequestMessage from '../messages/CourseRegistrationRequestMessage';

interface CourseRegistrationProps {
  courses?: Course[];
  registeredCourses?: string[];
  useCase: RequestHandler;
  onChangeCheck?: Function;
}

class CourseRegistration extends Component<CourseRegistrationProps> {
  constructor(props: CourseRegistrationProps) {
    super(props);
    this.register = this.register.bind(this);
  }

  register(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    // todo collect form data here
    let request = new CourseRegistrationRequestMessage(1, this.props.registeredCourses!);
    console.log(this.props.useCase!.handle(request));
  }

  render() {
    return (
      <form>
        <h3>Your student identification:</h3> 
        <p>Here should your ID appear</p>
        <h3>Choose your courses:</h3> 
        <ul>
          {this.props.courses!.map((course: Course) => {
            return <CourseListItem
                courseName={course.name}
                key={course.code}
                courseCode={course.code}
                toggleCheck={this.props.onChangeCheck}
            />;
          })}
        </ul>
        <input type="submit" onClick={this.register} value="Register" />
      </form>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    courses: state.courses.courses,
    registeredCourses: state.courses.registeredCourses
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChangeCheck: (courseCode: string) => {
      dispatch(toggleCheck(courseCode));
    }
  };
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(CourseRegistration);
